const input = require('sync-input');

console.log('H A N G M A N');
console.log('Guess the word: ');

const words = ['python', 'java', 'swift', 'javascript'];
const index = Math.floor(Math.random() * words.length);

if (words[index] === 'python') {
    console.log('Guess the word pyt---:');
} else if (words[index] === 'java') {
    console.log('Guess the word jav-:');
} else if (words[index] === 'swift') {
    console.log('Guess the word swi--:');
} else {
    console.log('Guess the word jav-------:');
}

const userWord = input();
if (words[index] === userWord) {
    console.log('You survived!');
} else {
    console.log('You lost!');
}
