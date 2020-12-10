
var readlinesync=require('readline-sync');
const chalk = require('chalk');


var score = 0;
var userName = readlinesync.question("What is your name?");
console.log(`Welcome ${userName} to Arkham knight quiz?`)

//play function
const play =(question,answer) =>{
  var userAnswer = readlinesync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green("Right!"));
    score++;
  }else{
    console.log(chalk.red("Wrong!"));
    score--
  }
   console.log(chalk.blue(`Your current score is ${score}`));
   console.log(chalk.yellow("---------------------------------"));
   
}

var quiz = [
   {
    question : "What super villain once broke Batman's back, leaving him crippled and wheelchair-bound?",
    answer : "bane",
  },
   {
    question : "What Batman villain formerly worked as a zoologist?",
    answer : "manbat",
  },
   {
    question : "The original Batgirl was related to what familiar Batman character?",
    answer : "batwoman",
  },
   {
    question : "Which of these Bat-villains was introduced first?",
    answer : "catwoman",
  },
  {
    question : "What was Alfred the butler's original family name?",
    answer : "beagle",
  },{
    question : "What was Bat-hound's name?",
    answer : "ace",
  },
  {
    question : "Who directed The Dark Knight Rises (2012)?",
    answer : "christopher nolan",
  },{
    question : "Henry Cavill played the role of which superhero in Justice League (2017)?",
    answer : "superman",
  },
  {
    question : "What is the name of the hospital prison featured in the Batman movies?",
    answer : "arkham asylum",
  },
  {
    question : "Whats the name of the city in which batman lives?",
    answer : "gotham",
  }
]

//loop
quiz.map(({question,answer})=>{
  play(question,answer);
})


//data for highscore
var highscore = [
  {
    name : "Manish",
    score : 10
  },
  {
    name : "Shiva",
    score : 9,
  },
  {
    name : "Janvi",
    score : 7
  }
]
console.log("your final score",score);
console.log("other highscores are : ",highscore);