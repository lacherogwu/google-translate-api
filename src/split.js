import fs from 'fs/promises';

const filename = 'some';
const rawFile = await fs.readFile(`./output/${filename}.txt`, 'utf-8');
const firstJson = JSON.parse(rawFile.split('\n')[3]);
const json = JSON.parse(firstJson[0][2]);

// const match = rawFile.match(/"(\[\[.*\]\])"/);
// const data = match[1].replace(/\\"/g, '"');
// const json = JSON.parse(data);
console.log(JSON.stringify(json, null, 2));
