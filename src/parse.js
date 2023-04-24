import fs from 'fs/promises';

const filename = 'potion';
const jsonRaw = await fs.readFile(`./output/${filename}.json`, 'utf-8');

/** @type {Array} */
const json = JSON.parse(jsonRaw);
// console.log(json.at(-1).at(5));
// console.log(JSON.stringify(json[0], null, 2));

console.log(JSON.stringify(parse(json), null, 2));

/** @param {Array} data */
function parse(data) {
	const langDetails = data[0].at(-1);
	const isAutoDetected = langDetails[1] === 'auto';

	const fromLang = isAutoDetected ? data[0][2] : langDetails[1];
	const toLang = langDetails[2];

	const metadata = parseTranslationMetadata(data);

	return {
		fromLang,
		toLang,
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
