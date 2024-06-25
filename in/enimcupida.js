const str = "NON_KEBAB_CASE";
const regex = /[^A-Za-z0-9-]/g;

const containsNonKebabCaseCharacters = regex.test(str);
console.log(containsNonKebabCaseCharacters); // Output: true

const nonKebabCaseCharacters = str.match(regex);
console.log(nonKebabCaseCharacters); // Output: ["_"]
