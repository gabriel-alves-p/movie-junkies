const question = document.getElementById('question');
const scoreText = document.getElementById('score');
const choices = Array.from(document.getElementsByClassName('answer-text'));
const headerText = document.getElementById('header-text');

let availableQuestions = [];
let currentQuestion = {};
let questionCounter = 0;
let acceptingAnswers = true;
let score = 0;

let questions = [
    {
        question: "Which three films make up what is known as the Three Flavours Cornetto Trilogy?",
        choice1: "Shaun of the Dead, Hot Fuzz, The World’s End",
        choice2: "Shaun of the Dead, Love Actually, The World’s End",
        choice3: "Hot Fuzz, Snatch, The Gentlemen",
        choice4: "The World’s End, Hot Fuzz, Snatch",
        answer: 1,
    },
    {
        question: "What year was the first Toy Story film released in cinemas?",
        choice1: "2001",
        choice2: "1999",
        choice3: "1997",
        choice4: "1995",
        answer: 4,
    },
    {
        question: "What is the highest-grossing box office film of all time?",
        choice1: "Avatar",
        choice2: "Avengers: Endgame",
        choice3: "The Godfather",
        choice4: "Avengers: Infinity War",
        answer: 2,
    },
    {
        question: "What is the name of the second James Bond film?",
        choice1: "No Time To Die",
        choice2: "Casino Royale",
        choice3: "From Russia With Love",
        choice4: "Goldfinger",
        answer: 3,
    },
    {
        question: "Which movie features an iconic dance scene between Uma Thurman and John Travolta?",
        choice1: "Pulp Fiction",
        choice2: "Grease",
        choice3: "Kill Bill",
        choice4: "Face: Off",
        answer: 1,
    },
    {
        question: "What does Tom Hanks compare life to in Forest Gump?",
        choice1: "A box of donuts",
        choice2: "A Christmas present",
        choice3: "A letter",
        choice4: "A box of chocolates",
        answer: 4,
    },
    {
        question: '"Frankly my dear, I don’t give a damn" is an iconic line from which classic film?',
        choice1: "Citizen Kane",
        choice2: "Titanic",
        choice3: "Gone With The Wind",
        choice4: "Casablanca",
        answer: 3,
    },
    {
        question: "What is the first word spoken in Star Wars: The Empire Strikes Back?",
        choice1: "Echo",
        choice2: "Alpha",
        choice3: "Romeo",
        choice4: "Luke",
        answer: 1,
    },
    {
        question: 'Name the film which boasts the famous line: “You can’t handle the truth!”',
        choice1: "The Shining",
        choice2: "A Few Good Men",
        choice3: "The Departed",
        choice4: "2001: A Space Odyssey",
        answer: 2,
    },
    {
        question: "What is The Terminator's most famous line",
        choice1: "Buenas tardes, baby",
        choice2: "Hasta la vista, baby",
        choice3: "Baby, hasta la vista",
        choice4: "Goodbye, baby",
        answer: 2,
    }
]

const SCORE_POINTS = 1;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    setNextQuestion();
}

setNextQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('/end.html');
    }

    questionCounter++;
    headerText.innerText = `
    Question ${questionCounter} of ${MAX_QUESTIONS}
    `;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            setNextQuestion()

        }, 1000)
    })
})

incrementScore = num => {
    score +=num;
    scoreText.innerText = score;
}

startGame()