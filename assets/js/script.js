
//const variables
const question = document.getElementById('question');
const scoreText = document.getElementById('score');
const options = Array.from(document.getElementsByClassName('answer-text'));
const headerText = document.getElementById('header-text');
const SCORE_POINTS = 1;
const MAX_QUESTIONS = 10;

//let variables
let availableQuestions = [];
let currentQuestion = {};
let questionCounter = 0;
let acceptingAnswers = true;
let score = 0;
let questions = [
    {
        question: "Which three films make up what is known as the Three Flavours Cornetto Trilogy?",
        option1: "Shaun of the Dead, Hot Fuzz, The World’s End",
        option2: "Shaun of the Dead, Love Actually, The World’s End",
        option3: "Hot Fuzz, Snatch, The Gentlemen",
        option4: "The World’s End, Hot Fuzz, Snatch",
        correct: 1,
    },
    {
        question: "What year was the first Toy Story film released in cinemas?",
        option1: "2001",
        option2: "1999",
        option3: "1997",
        option4: "1995",
        correct: 4,
    },
    {
        question: "What is the highest-grossing box office film of all time?",
        option1: "Avatar",
        option2: "Avengers: Endgame",
        option3: "The Godfather",
        option4: "Avengers: Infinity War",
        correct: 2,
    },
    {
        question: "What is the name of the second James Bond film?",
        option1: "No Time To Die",
        option2: "Casino Royale",
        option3: "From Russia With Love",
        option4: "Goldfinger",
        correct: 3,
    },
    {
        question: "Which movie features an iconic dance scene between Uma Thurman and John Travolta?",
        option1: "Pulp Fiction",
        option2: "Grease",
        option3: "Kill Bill",
        option4: "Face: Off",
        correct: 1,
    },
    {
        question: "What does Tom Hanks compare life to in Forest Gump?",
        option1: "A box of donuts",
        option2: "A Christmas present",
        option3: "A letter",
        option4: "A box of chocolates",
        correct: 4,
    },
    {
        question: '"Frankly my dear, I don’t give a damn" is an iconic line from which classic film?',
        option1: "Citizen Kane",
        option2: "Titanic",
        option3: "Gone With The Wind",
        option4: "Casablanca",
        correct: 3,
    },
    {
        question: "What is the first word spoken in Star Wars: The Empire Strikes Back?",
        option1: "Echo",
        option2: "Alpha",
        option3: "Romeo",
        option4: "Luke",
        correct: 1,
    },
    {
        question: 'Name the film which boasts the famous line: “You can’t handle the truth!”?',
        option1: "The Shining",
        option2: "A Few Good Men",
        option3: "The Departed",
        option4: "2001: A Space Odyssey",
        correct: 2,
    },
    {
        question: "What is The Terminator's most famous line?",
        option1: "Buenas tardes, baby",
        option2: "Hasta la vista, baby",
        option3: "Baby, hasta la vista",
        option4: "Goodbye, baby",
        correct: 2,
    }
]

/**
 * set questions to 0
 * set score to 0
 * display first question
 */
function runGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    setNextQuestion();
}

/**
 * sets next question
 * increases question counter by 1
 * randomizes questions
 */
function setNextQuestion() {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('score.html');
    }

    questionCounter++;
    headerText.innerText = `
    Question ${questionCounter} of ${MAX_QUESTIONS}
    `;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    options.forEach(function(option) {
        const number = option.dataset['number'];
        option.innerText = currentQuestion['option' + number];
    })

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

/**
 * checks whether the selected answer is correct or incorrect
 * increments score
 * sets next question
 */
options.forEach(function(option) {
    option.addEventListener('click', function(e) {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.correct ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedOption.parentElement.classList.add(classToApply);

        setTimeout(function() {
            selectedOption.parentElement.classList.remove(classToApply);
            setNextQuestion()

        }, 1000)
    })
})

incrementScore = function(num) {
    score += num;
    scoreText.innerText = score;
}

runGame()