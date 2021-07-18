const question = document.getElementById('question');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progress-bar-full');
const answers = Array.from(document.getElementsByClassName('answer-text'));
const headerText = document.getElementById('header-text');

let availableQuestions = [];
let currentQuestion = {};
let questionCounter = 0;
let acceptingAnswers = true;
let score = 0;

let questions = [
    {
        question: 'Which three films make up what is known as the Three Flavours Cornetto Trilogy?',
        answers: [
            { text: 'Shaun of the Dead, Hot Fuzz, The World’s End', correct: true},
            { text: 'Shaun of the Dead, Love Actually, The World’s End', correct: false},
            { text: 'Hot Fuzz, Snatch, The Gentlemen', correct: false},
            { text: 'The World’s End, Hot Fuzz, Snatch', correct: false}
        ]
    }, {
        question: 'What year was the first Toy Story film released in cinemas?',
        answers: [
            { text: '1999', correct: false},
            { text: '1997', correct: false},
            { text: '1995', correct: true},
            { text: '2001', correct: false}
        ]
    }, {
        question: 'What is the highest-grossing box office film of all time?',
        answers: [
            { text: 'Avatar', correct: false},
            { text: 'Avengers: Infinity War', correct: false},
            { text: 'Avengers: Endgame', correct: true},
            { text: 'The Godfather', correct: false}
        ]
    }, {
        question: 'What is the name of the second James Bond film?',
        answers: [
            { text: 'From Russia With Love', correct: true},
            { text: 'No Time To Die', correct: false},
            { text: 'Skyfall', correct: false},
            { text: 'Casino Royale', correct: false}
        ]
    }, {
        question: 'Which movie features an iconic dance scene between Uma Thurman and John Travolta?',
        answers: [
            { text: 'Kill Bill', correct: false},
            { text: 'Grease', correct: false},
            { text: 'Face Off', correct: false},
            { text: 'Pulp Fiction', correct: true}
        ]
    }, {
        question: 'What does Tom Hanks compare life to in Forest Gump?',
        answers: [
            { text: 'A box of donuts', correct: false},
            { text: 'A box of chocolates', correct: true},
            { text: 'A Christmas present', correct: false},
            { text: 'A letter', correct: false}
        ]
    }, {
        question: `"Frankly my dear, I don’t give a damn" is an iconic line from which classic film?`,
        answers: [
            { text: 'Titanic', correct: false},
            { text: 'Citizen Kane', correct: false},
            { text: 'Gone With The Wind', correct: true},
            { text: 'Casablanca', correct: false}
        ]
    }, {
        question: 'What is the first word spoken in Star Wars: The Empire Strikes Back?',
        answers: [
            { text: 'Echo', correct: true},
            { text: 'Alpha', correct: false},
            { text: 'Romeo', correct: false},
            { text: 'Luke', correct: false}
        ]
    }, {
        question: `Name the film which boasts the famous line: “You can’t handle the truth!”`,
        answers: [
            { text: 'The Shining', correct: false},
            { text: '2001: A Space Odyssey', correct: false},
            { text: 'The Departed', correct: false},
            { text: 'A Few Good Men', correct: true}
        ]
    }, {
        question: 'In which Austin Powers film does Beyoncé make her movie debut?',
        answers: [
            { text: 'International Man', correct: false},
            { text: 'Goldmember', correct: true},
            { text: 'The Spy Who Shagged Me', correct: false},
            { text: 'International Man of Mystery', correct: false}
        ]
    }
]
