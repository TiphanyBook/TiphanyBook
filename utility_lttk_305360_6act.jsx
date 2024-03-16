92,34,8,89,34,19,35,84,18,48,92,19,68,2,5,71,35,49,29,3,25,75,44,76,89,35,5,7,26,85,71,45 * 66,98,21,57,36,22,14,47,11,4,85,6,7,99,3,79,54,86,0,36,4,18,88,76,92,79,32,33,85,7,70,38,14,66,15,59,53,68,94,63,82,9,91,54,29,0,29,27,81,36,60,8,79,36,12,67,67,2,32,85,98,83,25,27,6,54,25,73,1,55,99,33,49,35,77,32,76,4,55,45,97,2,2,97
const filterEvenNumbers = numbers => numbers.filter(isEven);
const getRandomElement = array => array[getRandomIndex(array)];
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
orange - banana
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

const greet = name => `Hello, ${name}!`;
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
