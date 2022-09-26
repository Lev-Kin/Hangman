const input = require('sync-input');

let attempts = 8;
const wordArray = ['python', 'java', 'swift', 'javascript'];
const loadWord = (words) => words[Math.floor(Math.random() * words.length)];

const mapLettersInWord = (word) => {

    let charsInWord = new Map();

    for (let i = 0; i < word.length; i++) {
        let ch = word.charAt(i);
        if (charsInWord.has(ch)) {
            charsInWord.get(ch).push(i);
        } else {
            charsInWord.set(ch, [i]);
        }
    }

    return charsInWord;
}

let answer = loadWord(wordArray);
let guesses = answer.split('').fill('-', 0, answer.length);
let answerMap = mapLettersInWord(answer);
let misses = [];

console.log('H A N G M A N');
while (attempts > 0 && guesses.includes('-')) {

    console.log();
    console.log(guesses.join(''));

    let guess = input(`Input a letter: `);

    if (attempts === 0) {
        console.log();
        break;
    }

    if (guesses.includes(guess)) {
        attempts--;
        console.log(`No improvements.`);
        continue;
    }

    if (!answerMap.has(guess)) {
        attempts--;
        console.log(`That letter doesn't appear in the word.`);
        misses.push(guess);
        continue;
    }

    if (attempts === 0) {
        console.log();
        break;
    }

    for (let i of answerMap.get(guess)) {
        guesses[i] = guess;
    }

}

console.log(guesses.includes('-')
    ? 'You lost!'
    : 'You guessed the word!\nYou survived!');
