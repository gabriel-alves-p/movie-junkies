//let variables
let availableQuestions = [];
let currentQuestion = {};
let questionCounter = 0;
let acceptingAnswers = true;
let score = 0;
let questions = [];
let incrementScore = function(num) {
    score += num;
    scoreText.innerText = score;
};

/**
 * select game type
 * set questions to 0
 * set score to 0
 * display first question
 * run game type
 */
function runGame(type) {
    if (type === 'general') {
        questions = questions_general;
    } else if (type === 'trivia') {
        questions = questions_trivia;
    } else if (type === 'oscars') {
        questions = questions_oscars;
    } else if (type === 'quotes') {
        questions = questions_quotes;
    }
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    setNextQuestion();
    game.classList.remove('hide');
    rules.classList.add('hide');
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
    });
  
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
        if (classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedOption.parentElement.classList.add(classToApply);
        if (classToApply !== 'correct') {
            /* wrong Answer */
            /* dynamic query selector found via help from stack oveflow: https://stackoverflow.com/questions/50624800/how-to-dynamically-set-query-selector-attributes */
            let correctSelector = "#answer-" + currentQuestion.correct;
            let correctDiv = document.querySelector(correctSelector);
            correctDiv.classList.add('correct');
            setTimeout(function () {
                correctDiv.classList.remove('correct');
            }, 1000);
         
         }
         
        
        setTimeout(function() {
            selectedOption.parentElement.classList.remove(classToApply);
            setNextQuestion();
        }, 1000);
    });
});

function refreshPage(){
    window.location.reload();
}
