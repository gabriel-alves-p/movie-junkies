const finalScore = document.getElementById('final-score');
const mostRecentScore = JSON.parse(localStorage.getItem('mostRecentScore'));
const highScoreImg = document.getElementById('high-score');
const mediumScoreImg = document.getElementById('medium-score');
const lowScoreImg = document.getElementById('low-score');
const endMessage = document.getElementById('end-message');


finalScore.innerText = `You scored ${mostRecentScore} out of 10`;

if (mostRecentScore <= 5) {
    lowScoreImg.classList.remove('hide');
    endMessage.innerText = `It's time to renew that Netflix subscription...`;
} else if (mostRecentScore <= 7) {
    mediumScoreImg.classList.remove('hide');
    endMessage.innerText = `Hmmm we'll let that slide...`;
} else if (mostRecentScore >= 8) {
    highScoreImg.classList.remove('hide');
    endMessage.innerText = `Congratulations! You're officially a movie junkie!`;
}