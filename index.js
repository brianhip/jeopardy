const csArray = [["What is a closure?", "Type a, b or c to choose your answer. a) A brand of backpacks for school, b) A function and its lexically scoped variables, c) I don't know", 'b'],["What is an algorithm?", "Type a, b or c to choose your answer. a) A set of instructions to perform a task, b) Google's barrier of entry, c) I don't know", 'a'],["When was ES6 released?", "Type a, b or c to choose your answer. a) In 2015, b) Yesterday, c) 1996", 'a']];
const bioArr = [['What is the powerhouse of the cell?','a) Ribosomes, b) Mitochondria, c) Golgi Apparatus, d) Endoplasmic Reticulum', 'b'],['What organelle do plants use for photosynthesis?','a) Chlorophyll, b) Nucleus, c) Chloroplasts, d) Vacuole', 'c'],['In corn, smooth kernals(K) are dominant to wrinkled kernals (k). If a smooth farmer crossed two corn plants with genotypes (Kk) and (kk), what is the probability that the offspring will have wrinkled kernals (kk)?','a) 0/4, b) 1/4, c) 2/4, d) 3/4', 'c']];
const histObj = [['What did the ancient Egyptians write in?','a) Hieroglyphics, b) Chinese, c) German,d) Latin', 'a'], ['What was the name of the Greek god of wine?', 'a) Asclepius, b) Nike, c) Dionysus, d) Zeus','c'],['What is the name of the first Viking who became the King of England?','a) Erik the Red, b) Swain Forkebearde, c) Sweyn Forkbeard, d) Ragnar Lodbrok', 'c']];
const entertObj = [['In the movie Monsters, Inc., who is big and tall with blue fur and purple spots?' ,'a) Randall, b) Mike Wazowski, c) Sulley','c'],['In The Matrix, which character says Neo, no one has ever done anything like this? ','a) Trinity, b) Morpheus, c) Agent Smith','a'],['On what planet do Anakin and Obi-Wan battle in "Star Wars: Episode III - Revenge of the Sith"? ' ,'a) Corusant, b) Camino, c) Mustafar ', 'c']];
let counter = 0;
let counter2 = 0;

console.log("Welcome to Jeopardy game\n");
console.log("This game is for two players");
let name1 = prompt("What is your name player one?");
let name2 = prompt("What is your name player two?");
console.log(name1 +" and "+ name2 + " instructions are simple use the numbers from the options to type your choice. Make sure to hit enter after typing the number and let's play.\n");

for (let questionsAnswered = 0; questionsAnswered< 2; questionsAnswered++){

  if(questionsAnswered%2 === 0){
    console.log("\nHey "+ name1+" is your turn!");
    console.log("Your score is " + counter);
    console.log("Please select a topic");
  } else {
    console.log("\nHey "+name2+" is your turn!");
    console.log("Your score is " + counter2);
    console.log("Please select a topic");
  }
  
  let topicIndex = 0; 
  do{
    topicIndex = prompt("1) Biology, 2) History, 3) Entertainment, 4) Computer Science");
  } while (topicIndex > 4 || topicIndex < 1 && typeof(topicIndex) !== 'string');
  topicIndex--;
  
  let questionIndex = 0;
    do{
    questionIndex = prompt("Select difficulty: 1) 100, 2) 200, 3) 300");
  } while (questionIndex > 3 || questionIndex < 1);
  questionIndex--;

  const topicsArray = [bioArr, histObj, entertObj, csArray];

  function jeopardy(questionIndex, arr){
    // Ask question
    console.log(arr[questionIndex][0]);
    // Provide multiple choice and ask for answer
    let answer = prompt(arr[questionIndex][1])
    if(answer === arr[questionIndex][2]){
      console.log('Correct'); 
      arr[questionIndex][2] = false;
      return questionIndex+1;
    } else if (arr[questionIndex][2] === false){
      questionsAnswered--;
      console.log("Question has been answered");
    } else {
      console.log("Wrong input");
    }
    return 0;
  }
  
  let result = jeopardy(questionIndex, topicsArray[topicIndex]);
  if(questionsAnswered%2 === 0) {
    counter += result * 100; 
    console.log(name1 + " your score is " + counter);
  } else {
    counter2 += result * 100;
    console.log(name2 + " your score is " + counter2);
  }
}

console.log("\n " + name1 + " Final score: " + counter +"\n "+name2 +" Final score: " + counter2);

