const input = require('sync-input');

console.log('H A N G M A N')
console.log('Guess the word: ')

const words = ['python', 'java', 'swift', 'javascript'];
const index = Math.floor(Math.random() * words.length);

const userWord = input();
if (words[index] === userWord) {
    console.log('You survived!')
} else {
    console.log('You lost!')
}
