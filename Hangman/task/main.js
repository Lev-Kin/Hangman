const input = require('sync-input');

const limitAttempts = 8;
let win = 0;
let lose = 0;
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

const playGame = () => {
    let answer = loadWord(wordArray);
    let guesses = answer.split('').fill('-', 0, answer.length);
    let answerMap = mapLettersInWord(answer);
    let misses = [];
    let attempts = limitAttempts;

    while (attempts > 0 && guesses.includes('-')) {

        console.log();
        console.log(guesses.join(''));

        let guess = input(`Input a letter: `);

        if (!guess || guess.length > 1) {
            console.log('Please, input a single letter.');
            continue;
        }

        if (guess < 'a' || guess > 'z') {
            console.log('Please, enter a lowercase letter from the English alphabet.');
            continue;
        }

        if (attempts === 0) {
            console.log();
            break;
        }

        if (guesses.includes(guess) || misses.includes(guess)) {
            console.log(`You've already guessed this letter.`);
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

    let lost = guesses.includes('-');
    console.log(lost ? 'You lost!\n' : `You guessed the word ${answer}!\nYou survived!\n`);
    win += !lost ? 1 : 0;
    lose += lost ? 1 : 0;
};

const showResults = () => {
    console.log(`You won: ${win} times.\nYou lost: ${lose} times.\n`);
};

console.log('H A N G M A N  # 8 attempts');
(function () {

    let select;
    let play = true;

    do {

        select = input('Type "play" to play the game, "results" to show the scoreboard, and "exit" to quit: ');

        switch (select) {
            case 'play':
                playGame();
                break;
            case 'results':
                showResults();
                break;
            case 'exit':
                play = false;
                break;
            default:
                console.log('No such option!\n');
                break;
        }

    } while (play);

    console.log('\nThank you for playing Hangman!!');
}());

