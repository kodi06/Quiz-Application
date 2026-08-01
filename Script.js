const quiz=[
{
question:"HTML stands for?",
answers:["Hyper Text Markup Language","High Text Machine Language","Home Tool Markup Language"],
correct:0
},
{
question:"CSS is used for?",
answers:["Styling","Database","Programming"],
correct:0
},
{
question:"JavaScript is used for?",
answers:["Making web pages interactive","Creating tables","Formatting text"],
correct:0
}
];

let current=0;
let score=0;

function loadQuestion(){
document.getElementById("question").innerHTML=quiz[current].question;

let output="";

quiz[current].answers.forEach((answer,index)=>{
output+=`<button onclick="checkAnswer(${index})">${answer}</button><br><br>`;
});

document.getElementById("answers").innerHTML=output;
}

function checkAnswer(index){
if(index===quiz[current].correct){
score++;
}
}

function nextQuestion(){
current++;

if(current<quiz.length){
loadQuestion();
}
else{
document.querySelector(".quiz-box").innerHTML=
"<h2>Quiz Completed</h2><h3>Your Score: "+score+"/"+quiz.length+"</h3>";
}
}

loadQuestion();
