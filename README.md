# Movie Junkies

![Website's responsiveness](documentation/responsive-screenshot.jpeg)

## Author

Gabriel Alves

## Project Overview

This website was developed to break the mold of the movie nights with your friends and family, when a little competition can't hurt. It was created to be fun, intuitive, easy to play and, most importantly, to decide who's the 'know-it-all' in the room. The categories range in difficulty and are suitable for families of all sizes and ages.


- You can view my deployed website [here](https://gabriel-alves-p.github.io/movie-junkies/)

## Table of Contents
Generate after readme is complete for UX and below

## UX

### Project Goals

At the early stages of planning for the website, research was made regarding age gaps between people who partake in quizzes in the UK. It was found that it was largely above 18 years of age for UK, so after refining my research to exclude pub quizzes, the research came out with an average that ranged between 14 and 45 years old.

The website was largely designed to be appealing to young teenagers and adults in accordance with the research made. The questions and answers include both older films and new releases to match the wide range of ages which will be playing the quiz.

The website hopes to provide an extra layer of fun and entertainment to movie nights, either as an a pre-movie ice breaker or even afterwards to see who knows the most.

### Design Choices

#### Strategy Plane

- The basics of the website are that it is, at its core, a fun, easy-to-play and intuitive quiz for teenagers and adults.

#### Scope / Structure / Skeleton Planes

- The website would contain a very minimalistic landing page, with a simple logo at the top, instructions on how to play the quiz to follow, and finally the four categories of questions for the user to choose from.

- The second page (the quiz running page) would follow on to the same minimalistic idea of the first page, it would contain a question number, a score tracker, the quiz question, the four answer options for the user to click on and a 'return home' button.

- The last page (the score page) would simply have a your score, an fun image to match your score (whether a low score, a medium score or a hig score), a message to match your performance and a button to 'return home'.

- Each of the steps taken in the skeleton plane planning were done so as to only ever give a maximum of 4 clickable options on the screen for the user. It was done so that the website can only ever be intuitive and easy to navigate.

#### Surface Plane

##### Colors

The colors of the website were chosen to resemble an arcade's carpet. An iconic colorway of the 1980's. Although not all users will understand the theme or get the same feeling from the colors, they are still easy on the eyes and look the part on the quiz.

![Coolors palette](documentation/coolors-screenshot.jpeg)

Colors were chosen with the help of [Coolors](https://coolors.co/).

##### Typography

Font styles and sizes were chosen to match the website's color palette and 1980's arcade theme.

![Font style](documentation/font-style-screenshot.jpeg)

Font style is called "Righteous" and it was chosen with the help of [Google Fonts](https://fonts.google.com/).

##### Images

The images used on the website were chosen solely for entertainment purpose and to match the arcade feel of the website.

![Popcorn footer](documentation/popcorn-screenshot.jpeg)

![High score image](assets/images/high-score.jpeg)

![Medium score image](assets/images/medium-score.jpeg)

![Low score image](assets/images/low-score.jpeg)

##### Animations and Transitions

Special hovering effects were applied to all buttons on the website, a mixture of scaling and box-shadowing were used to make the buttons look like the neon lights at an arcade.

![Buttons](documentation/buttons-screenshot.jpeg)

![Credit](documentation/credit-screenshot.jpeg)

### Wireframes

Wireframes for this project can be found [here](https://drive.google.com/file/d/1J1Q6ZbRyVI-HSJThHyAYONjWD175Wdu1/view?usp=sharing)

### Features

#### Implemented Features

- On the landing page I have implemented a background audio that can be switched on and off by the user upon clickin on it.
![Audio button](documentation/audio.jpeg)


- Following the audio button, we have the website's title and the game rules, so the user is aware of how to play the game before selecting to do so.
![Rules](documentation/rules.jpeg)


- The website then showcases the four different game options for the user to choose from and highlights them with a shadow-box.
![Game categories](documentation/games.jpeg)


- On the game-running pages I have added a header to the game container, followed by the question and the four options for answers (answers are highlighted in either green for correct or red for incorrect).
![Game](documentation/game.jpeg)


- All pages contain a "Return Home" button so the user can always start again from the beginning.
![Return button](documentation/return.jpeg)


- Score page is kept minimalistic with two lines of text informing the user of their score, an image feature that matches the user's score and a button to return to the home page.
![Score page](documentation/score.jpeg)


- The website has a 404 error page implemented that redirects the user directly back to our home page.
![404 error page](documentation/404.jpeg)


#### Future Features

- In the future I would like to implement two new categories for the games. These would be "Picture" and "Audio" based categories, which would use images and audios rather than text for the questions.

- Another feature I would like to implement to the website in the future are sound effects that are triggered when the user clicks on a correct or an incorrect answer.

- Lastly, I would like to implement a high-score board to the website, which users could then upload their best results up to.

## Testing

### Validation Testing

- All CSS files on this project were run through a [CSS Validator](https://jigsaw.w3.org/css-validator/) and passed.
![CSS testing](documentation/css-testing.jpeg)

- All HTML files on this project were run through a [HTML Validator](https://validator.w3.org/) and passed.
![HTML Testing](documentation/html-testing.jpeg)

- All JavaScript files on this project were run through a [JavaScript Validator](https://jshint.com/) and passed.
![JavaScript Testing](documentation/jshint1.jpeg)
![JavaScript Testing](documentation/jshint2.jpeg)

### Cross Browser and Cross Device Testing

| TOOL / Device                 | BROWSER     | OS         | SCREEN WIDTH  |
|-------------------------------|-------------|------------|---------------|
| Real phone: iPhone 12 - horiz | Safari      | iOS        | S 844 x 390   |
| Real phone: iPhone XS Max     | Safari      | iOs        | S 425 x 900   |
| Dev tools emulator: Pixel 2   | Chrome      | Windows    | S 411 x 731   |
| Dev tools emulator: iPhone X  | Firefox     | iOS        | S 375 x 812   |
| Dev tools emulator: Nexus 7   | Chrome      | Windows    | M 600 x 960   |
| Real tablet: iPad             | Safari      | iOS        | M 768 x 1024  |
| Real tablet: iPad - horiz     | Safari      | iOS        | M 768 x 1024  |
| Dev tools emulator: iPad Pro  | Chrome      | Windows    | L 1024 x 1366 |
| Real computer: MacBook Pro    | Firefox     | Big Sur    | XL 1752 x 960 |
| Real computer: MacBook Air    | Safari      | Big Sur    | XL 1240 x 768 |

### Manual Testing
    
You can view my manual testing document [here](https://docs.google.com/spreadsheets/d/1NDrcY6318L0l5_bbKJrXnOSrcQA3j5oe7nytSbQG96Q/edit?usp=sharing).

### Defect Tracking

You can view my defect tracking document [here](https://docs.google.com/spreadsheets/d/1TCmLOFkqmdD40cWfyRlDiH3qIxzpVGPBso8NyfzImAM/edit?usp=sharing).

### Defects of Note

- Highlighting correct answer when an incorrect answer is chosen by the user. This bug was fixed by adding IDs to the answer options and using JavaScript to create a query that temporarily adds the 'correct' class to the correct answer before setting the next answer.

- 'Hide' or 'show' images that match the user's score at the end of the quiz. This was solved by using 'if' and 'else if' statements with the help of revisiting Code Institute's content.

- Get an accurate score at the end of the quiz. Not solved as of yet.

### Outstanding Defects

## Lighthouse Audits

- Below you will find my Lighthouse Audit.
![Lighthouse audit](documentation/lighthouse-audit.jpeg)

## Deployment

1. Go to the repository created on GitHub.
2. Click on 'Settings'.
3. Scroll down and click on 'Pages' on the left hand side menu.
4. Select the 'Branch' 'master' and click on 'Save'.
5. Allow GitHub a few minutes to deploy the website and then refresh the page.
6. Website deployed.

![Deployment 1](documentation/deployment1.jpeg)

![Deployment 2](documentation/deployment2.jpeg)

![Deployment 3](documentation/deployment3.jpeg)

## Credits 

### Content

Quiz questions and answers were taken from the following websites.
- https://parade.com/977752/samuelmurrian/movie-trivia/
- https://metro.co.uk/2021/04/25/oscars-2021-quiz-questions-and-answers-14469158/
- http://www.freepubquiz.co.uk/oscars-quiz.html
- https://www.boredpanda.com/interesting-movie-facts/?utm_source=google&utm_medium=organic&utm_campaign=organic
- https://bestlifeonline.com/movie-facts/
- https://www.nme.com/blogs/the-movies-blog/100-random-movie-facts-you-really-need-to-know-763942

### Media

Images and audios were taken from the following websites.

- https://uproxx.com/movies/quentin-tarantino-pulp-fiction-in-space/
- https://time.com/4153143/quentin-tarantino-hateful-eight-theater/
- https://www.vulture.com/2019/11/martin-scorsese-simply-couldnt-make-time-to-direct-joker.html
- https://www.playonloop.com/royalty-free-music/action-and-trailer/

### Acknowledgments

StackOverflow Help

- https://stackoverflow.com/questions/50624800/how-to-dynamically-set-query-selector-attributes
- https://stackoverflow.com/questions/29884654/button-that-refreshes-the-page-on-click

YouTube Inspiration

- https://www.youtube.com/watch?v=riDzcEQbX6k&t=984s
- https://www.youtube.com/watch?v=pQr4O1OITJo
- https://www.youtube.com/watch?v=LQGTb112N_c
- https://www.youtube.com/watch?v=f4fB9Xg2JEY&t=3558s

My Code Institute mentor Malia Havlicek, for helping me achieve the best result possible within my project's scope and helping me progress and solve the hardest bugs I've encountered so far.

And finally Code Institute for inspiration regarding project ideas.