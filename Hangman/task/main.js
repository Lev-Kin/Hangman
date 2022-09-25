const input = require('sync-input');

console.log('H A N G M A N')
console.log('Guess the word: ')

const word = input();
if (word === 'python') {
    console.log('You survived!')
} else {
    console.log('You lost!')
}
