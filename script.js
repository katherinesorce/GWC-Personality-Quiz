/*Add your JavaScript here*/
var summerScore = 0;
var winterScore = 0;
var questionCount = 0;

//Store HTML elements using the DOM
var result = document.getElementById("result");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

//Listen for click on answer buttons and call function if clicked 
q1a1.addEventListener("click", summer);
q1a2.addEventListener("click", winter);

q2a1.addEventListener("click", summer);
q2a2.addEventListener("click", winter);

q3a1.addEventListener("click", summer);
q3a2.addEventListener("click", winter);

//Track summer score and check if quiz is complete
function summer(){
  summerScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "summerScore = " + summerScore);

if (questionCount == 3){
  console.log("The quiz is done!")
  updateResult();
}
}

//Track winter score and check if quiz is complete
function winter(){
  winterScore += 1;
  questionCount += 1;
  console.log("questionCount = " + questionCount + "winterScore = " + winterScore);
  
if (questionCount == 3){
  console.log("The quiz is done!")
  updateResult();
}
}

//Update 
function updateResult(){
  if (summerScore >= 2){
  result.innerHTML = "You are a summer person!";
  console.log("You are a summer person!");
  } else if (winterScore >= 2){
  result.innerHTML = "You are a winter person!";
  console.log("You are a winter person!")
  }
}

