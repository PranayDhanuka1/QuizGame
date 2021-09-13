var readlineSync = require("readline-sync");
const chalk = require('chalk');
const log = console.log;

var userName = readlineSync.question("Please enter your name: ");
console.log(chalk.bgGreen("Welcome " + chalk.bold.underline.black(userName) + " to Lucifer quiz! "));

var score = 0

const qna = [
  {
    question:`
    In what city does the show LUCIFER take place? 
    a: London
    b: New-York
    c: Paris
    d: Los Angeles\n`,
    
    answer:"d"

  },
  {
    question:`
    What is the name of Lucifer’s nightclub? 
    a: Luci's Place
    b: Hell on Earth
    c: Lux
    d: Eden\n`,

    answer:"c"

  },{
    question:`
   What musical instrument is Lucifer often seen playing?
    a: Guitar
    b: Piano
    c: Sitar
    d: None\n`,

    answer:"b"

  },{
    question:`
   Lucifer has a large scar that reveals part of his angelic nature. What is it?
    a: A halo around his head
    b: Wings on his back
    c: A tail on his butt
    d: Horns on his forehead\n`,

    answer:"b"

  },{
    question:`
   What is Maze's job in season 1?
    a: Bounty hunter
    b: Dominatrix
    c: Bartender at Lux
    d: Lucifer's bodyguard\n`,

    answer:"c"

  }

]

function play(question, answer){
  var userAnswer = readlineSync.question(question)
  
  if (userAnswer === answer){
    console.log(chalk.blue("You are right!"))
    score++
    console.log("Your current score is: " + chalk.red(score))
   console.log(chalk.cyanBright("---------------------------------"))
  }else{
    console.log("You are wrong!"+chalk.red(" Correct answer is "+ answer))
    console.log("Your current score is: " + chalk.red(score))
    console.log(chalk.cyanBright("---------------------------------"))
  }
}



for(var i = 0; i < qna.length; i++){
 
  var currentQuestion = qna[i]
  play(currentQuestion.question,currentQuestion.answer )
  
}
console.log("Thank you for playing, Game has ended")
console.log("Your final score is " + score)