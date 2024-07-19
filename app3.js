
const fs = require('fs');

const content = fs.readFileSync('README.md', 'utf-8');

const wordCount = content.split(/React/ig).length;

const reactWordCount = content.match(/react/ig ?? []).length
// console.log(wordCount);

console.log('Palabras: ', wordCount);
console.log('react words: ', reactWordCount);
