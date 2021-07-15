const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('incorrect')
        }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}

const questions = [
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