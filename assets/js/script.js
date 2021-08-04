//const variables
const question = document.getElementById('question');
const scoreText = document.getElementById('score');
const options = Array.from(document.getElementsByClassName('answer-text'));
const headerText = document.getElementById('header-text');
const SCORE_POINTS = 1;
const MAX_QUESTIONS = 10;
const game = document.querySelector('.gameboard');
const rules = document.querySelector('.rules');
const questions_general = [
    {
        question: "Which three films make up what is known as the Three Flavours Cornetto Trilogy?",
        option1: "Shaun of the Dead, Hot Fuzz, The World's End",
        option2: "Shaun of the Dead, Love Actually, The World's End",
        option3: "Hot Fuzz, Snatch, The Gentlemen",
        option4: "The World's End, Hot Fuzz, Snatch",
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
        question: "What does Tom Hanks compare life to in Forrest Gump?",
        option1: "A box of donuts",
        option2: "A Christmas present",
        option3: "A letter",
        option4: "A box of chocolates",
        correct: 4,
    },
    {
        question: `"Frankly my dear, I don't give a damn" is an iconic line from which classic film?`,
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
        question: `Name the film which boasts the famous line: "You can't handle the truth!"?`,
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
];

const questions_trivia = [
    {
        question: "In the Titanic, who was the true author of the famous topless sketch of Kate Winslet?",
        option1: "James Cameron",
        option2: "Leonardo DiCaprio",
        option3: "Kate Winslet",
        option4: "Kathy Bates",
        correct: 1,
    },
    {
        question: "In the Wizard of Oz's snowy poppy field scene, what is the artificial snow made of?",
        option1: "Styrofoam",
        option2: "Sodium polyacrylate",
        option3: "Bicarbonate of soda mixed with corn flour",
        option4: "Asbestos",
        correct: 4,
    },
    {
        question: "What is the famous code sequence from The Matrix's origin?",
        option1: "A big tech company's code",
        option2: "Symbols scanned from a sushi cookbook",
        option3: "Emojis",
        option4: "Code written by the script writers",
        correct: 2,
    },
    {
        question: "In Dallas Buyers Club what small mount of money was set as a make-up budget?",
        option1: "$800",
        option2: "$500",
        option3: "$250",
        option4: "$200",
        correct: 3,
    },
    {
        question: "In Star Trek, what sound effect was used to accompany the automatic doors opening on the U.S.S Enterprise? ",
        option1: "An air powered train toilet door",
        option2: "A silicon implant bitten on",
        option3: "A squeaking mouse",
        option4: "A rubber sole dragged across the floor",
        correct: 1,
    },
    {
        question: "After shooting 2001: A Space Odyssey what happened with the props and sets used in the film?",
        option1: "They were stored and appeared as Easter eggs in later productions made by the director",
        option2: "They were sold on an auction",
        option3: "They burnt down in an accidental fire",
        option4: "They were purposely destroyed",
        correct: 4,
    },
    {
        question: "In Casino Royale what emergency happened to the leading star Daniel Craig while shooting the first fight scene?",
        option1: "He suffered a concussion",
        option2: "He broke his nose",
        option3: "His two front teeth were knocked out",
        option4: "He broke his collar bone",
        correct: 3,
    },
    {
        question: "What scene from Alfred Hitchcock’s Psycho was revolutionary and first-of-its-kind in America?",
        option1: "A flushing toilet",
        option2: "A woman taking a shower",
        option3: "A conversation about mental illness",
        option4: "A woman awaken by an officer",
        correct: 1,
    },
    {
        question: "What is the fecal matter from a provocative scene in Trainspotting actually  made of?",
        option1: "Nuts mixed with butter and cocoa powder",
        option2: "Chocolate",
        option3: "Raw blood-sausage",
        option4: "Dark sugar, flour and water",
        correct: 2,
    },
    {
        question: "What recording was used to immitate Jurassic Park's Raptors?",
        option1: "Foxes mating",
        option2: "Tortoises mating",
        option3: "Eagles mating",
        option4: "A squeaky door",
        correct: 2,
    }
];

const questions_oscars = [
    {
        question: "Which film received 12 nominations at the February 2016 Academy Awards Ceremony?",
        option1: "The Revenant",
        option2: "The Martian",
        option3: "The Big Short",
        option4: "Bridge of Spies",
        correct: 1,
    },
    {
        question: "Which was the first British film to win the Academy Award for Best Picture?",
        option1: "Romeo and Juliet",
        option2: "Henry V",
        option3: "Ophelia",
        option4: "Hamlet",
        correct: 4,
    },
    {
        question: "Meryl Streep won her first Oscar for Best Supporting Actress in which film?",
        option1: "Sophie’s Choice",
        option2: "Kramer vs Kramer",
        option3: "The Iron Lady",
        option4: "Mamma Mia!",
        correct: 2,
    },
    {
        question: "In which film did Tom Hank's win his first Academy Award for Best Actor?",
        option1: "Forrest Gump",
        option2: "Cast Away",
        option3: "Philadelphia",
        option4: "The Green Mile",
        correct: 3,
    },
    {
        question: "Which actor has only acted in five feature films in his career, but all were nominated for the Best Picture Oscar?",
        option1: "John Cazale",
        option2: "Marlon Brando",
        option3: "Christopher Walken",
        option4: "Al Pacino",
        correct: 1,
    },
    {
        question: "Michael Keaton was nominated for Best Actor, with Edward Norton and Emma Stone nominated in Best Supporting Acting categories, for which film?",
        option1: "The Illusionist",
        option2: "La La Land",
        option3: "Beetlejuice",
        option4: "Birdman",
        correct: 4,
    },
    {
        question: "Who caused outrage by sending an Apache called Sacheen Littlefeather to decline the Best Actor he’d just won?",
        option1: "Jack Nicholson",
        option2: "Michael Caine",
        option3: "Marlon Brando",
        option4: "James Dean",
        correct: 3,
    },
    {
        question: "Which American actor, comedian and voice artist hosted the 2016 Oscars?",
        option1: "Chris Rock",
        option2: "Dave Chappelle",
        option3: "Adam Sandler",
        option4: "Eddie Murphy",
        correct: 1,
    },
    {
        question: "Anthony Hopkins previously won an Oscar for playing which famous villain?",
        option1: "Father Lucas",
        option2: "Hannibal Lecter",
        option3: "Hans Gruber",
        option4: "Norman Bates",
        correct: 2,
    },
    {
        question: "What film made history in 2020 by being the first film not in the English language to win Best Picture?",
        option1: "Oldboy",
        option2: "Parasite",
        option3: "Another Round",
        option4: "Mother",
        correct: 2,
    }
];

const questions_quotes = [
    {
        question: `"Just Keep Swimming"`,
        option1: "Finding Nemo",
        option2: "Dory",
        option3: "Moana",
        option4: "Little Mermaid",
        correct: 1,
    },
    {
        question: `"My precious"`,
        option1: "Lord of the Rings: The Fellowship Of The Ring",
        option2: "Lord of the Rings: The Two Towers",
        option3: "Lord of the Rings: The Return Of The King",
        option4: "The Hobbit",
        correct: 2,
    },
    {
        question: `"You talking to me?"`,
        option1: "Baby Driver",
        option2: "Taxi Driver",
        option3: "Drive",
        option4: "License To Drive",
        correct: 2,
    },
    {
        question: `"I'm going to make him an offer he can't refuse"`,
        option1: "Goodfellas",
        option2: "The Sopranos",
        option3: "The Godfather",
        option4: "Reservoir Dogs",
        correct: 3,
    },
    {
        question: `"Here's Johnny!"`,
        option1: "The Shining",
        option2: "Die Hard",
        option3: "Sherlock Holmes",
        option4: "Rambo: First Blood",
        correct: 1,
    },
    {
        question: `"They may take our lives, but they'll never take our freedom!"`,
        option1: "Gladiator",
        option2: "Troy",
        option3: "300",
        option4: "Braveheart",
        correct: 4,
    },
    {
        question: `"I will look for you, I will find you, and I will kill you"`,
        option1: "The A Team",
        option2: "The Transporter",
        option3: "Taken",
        option4: "Hitman",
        correct: 3,
    },
    {
        question: `"That's why her hair is so big - it's full of secrets"`,
        option1: "Mean Girls",
        option2: "Freaky Friday",
        option3: "Easy A",
        option4: "The Parent Trap",
        correct: 1,
    },
    {
        question:`"I'm just a girl, standing in front of a boy, asking him to love her"`,
        option1: "Pretty Woman",
        option2: "Notting Hill",
        option3: "Love, Actually",
        option4: "Runaway Bride",
        correct: 2,
    },
    {
        question: `"You're going to need a bigger boat"`,
        option1: "Raiders Of The Lost Ark",
        option2: "Jaws",
        option3: "The Lost World: Jurassic Park",
        option4: "Deep Blue Sea",
        correct: 2,
    }
];

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
        
        setTimeout(function() {
            selectedOption.parentElement.classList.remove(classToApply);
            setNextQuestion();
        }, 1000);
    });
});
