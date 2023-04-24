import fs from 'fs/promises';

const filename = 'test';
const jsonRaw = await fs.readFile(`./output/${filename}.json`, 'utf-8');

/** @type {Array} */
const json = JSON.parse(jsonRaw);
// console.log(json.at(-1).at(5));
// console.log(JSON.stringify(json[0], null, 2));

console.log(parse(json));

/** @param {Array} data */
function parse(data) {
	const langDetails = data[0].at(-1);
	const isAutoDetected = langDetails[1] === 'auto';

	const fromLang = isAutoDetected ? data[0][2] : langDetails[1];
	const toLang = langDetails[2];

	// console.log(data.at(-1));
	const translationOfDetails = parseTranslationMetadata(data);

	return {
		fromLang,
		toLang,
		isAutoDetected,
	};
}

/** @param {Array} data */
function parseTranslationMetadata(data) {
	const rawMetadata = data.at(-1);

	const [, definitionsRaw, examplesRaw, seeAlso1Raw, unknownRaw, translationsRaw] = rawMetadata;
	const definitions = parseDefinitions(definitionsRaw);
	const examples = '';
	const seeAlso1 = '';
	const unknown = '';
	const translations = '';

	console.log(definitions);
}

/** @type {Array} rawDefinitions */
function parseDefinitions(rawDefinitions) {
	const output = {
		tags: rawDefinitions.at(-1)[0] || [],
	};

	rawDefinitions[0].forEach(item => {
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
