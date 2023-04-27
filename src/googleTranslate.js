const defaultOptions = {
	from: 'auto',
	to: 'en',
};

translate('cool', { to: 'ar' });

async function translate(text, options = defaultOptions) {
	const rawText = await sendApiRequest(text, options.from, options.to);
	const json = convertRawToJson(rawText);
	const parsed = parse(json);
	// console.log(parsed);
	console.log(JSON.stringify(parsed, null, 2));
}

/** @param {Array} data */
function parse(data) {
	const langDetails = data[0].at(-1);
	const isAutoDetected = langDetails[1] === 'auto';

	const from = isAutoDetected ? data[0][2] : langDetails[1];
	const to = langDetails[2];

	const metadata = parseTranslationMetadata(data);
	// const metadata = undefined;

	return {
		from,
		to,
		isAutoDetected,
		metadata,
	};
}

/** @param {Array} data */
function parseTranslationMetadata(data) {
	const rawMetadata = data.at(-1);

	const [, definitionsRaw, examplesRaw, seeAlsoRaw, unknownRaw, translationsRaw] = rawMetadata;
	const definitions = parseDefinitions(definitionsRaw);
	const examples = parseExamples(examplesRaw);
	const seeAlso = parseSeeAlso(seeAlsoRaw);
	const translations = parseTranslations(translationsRaw);

	return {
		definitions,
		examples,
		seeAlso,
		translations,
	};
}

/** @type {Array} rawValue */
function parseDefinitions(rawValue) {
	const output = {
		tags: [],
		noun: [],
		verb: [],
		abbreviation: [],
	};
	if (!rawValue) return output;

	output.tags = rawValue.at(-1)[0] || [];

	rawValue[0].forEach(item => {
		const key = item[0];
		const value = item[1].map(i => {
			const [text, description = null, unknown1, unknown2, labelsRaw, synonymsRaw] = i;

			return {
				text,
				description,
				labels: labelsRaw?.flat?.() || [],
				synonyms: synonymsRaw?.[0]?.[0]?.flat?.() || [],
			};
		});
		output[key] = value;
	});

	return output;
}

/** @type {Array} rawValue */
function parseExamples(rawValue) {
	if (!rawValue) return [];
	return rawValue[0].map(item => JSON.parse(`"${item[1]}"`));
}

/** @type {Array} rawValue */
function parseSeeAlso(rawValue) {
	if (!rawValue) return [];
	return rawValue[0];
}

/** @type {Array} rawValue */
function parseTranslations(rawValue) {
	const output = {
		verb: [],
		adjective: [],
		noun: [],
	};
	if (!rawValue) return output;

	rawValue[0].forEach(item => {
		const key = item[0];
		const value = item[1].map(i => {
			const [label, gender = null, translations, frequencyRaw] = i;

			const frequencyMap = {
				1: 'common',
				2: 'uncommon',
				3: 'rare',
			};
			const frequency = frequencyMap[frequencyRaw] || 'unknown';

			return {
				label,
				gender,
				translations,
				frequency,
			};
		});
		output[key] = value;
	});

	return output;
}

function convertRawToJson(rawText) {
	const firstPart = JSON.parse(rawText.split('\n')[3]);
	const json = JSON.parse(firstPart[0][2]);
	return json;
}

async function sendApiRequest(text, from, to) {
	const url = buildUrl();
	const body = buildBody(text, from, to);
	const res = await fetch(url, {
		headers: {
			'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
		},
		body,
		method: 'POST',
	});

	return await res.text();
}
function buildUrl() {
	const url = 'https://translate.google.com/_/TranslateWebserverUi/data/batchexecute';
	const params = {
		rpcids: 'MkEWBc',
		'source-path': '%2F',
		'f.sid': '6049192754589826213',
		bl: 'boq_translate-webserver_20230425.07_p0',
		hl: 'en',
		'soc-app': '1',
		'soc-platform': '1',
		'soc-device': '1',
		_reqid: '81709',
		rt: 'c',
	};
	const queryParms = new URLSearchParams(params);
	return `${url}?${queryParms}`;
}

function buildBody(text, from, to) {
	const value = `[[["MkEWBc","[[\\"${text}\\",\\"${from}\\",\\"${to}\\",true],[null]]",null,"generic"]]]&at=ABklwfa5HnoewXBLB2EC3vky4g3f:1682624508157&`;
	return `f.req=${encodeURIComponent(value)}`;
}
