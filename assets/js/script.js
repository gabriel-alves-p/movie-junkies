const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

startButton.addEventListener('click', startGame)

let shuffledQuestions, currentQuestionIndex

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
}

function selectAnswer() {

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
    }
]