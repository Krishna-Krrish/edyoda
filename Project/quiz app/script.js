const data = [
  {"id":1,
  "answer":3,
  "question":"Which was not one of Voldemort's Horcruxes?",
  "options":["Harry","Nagini","Helga's Diadem","Tom Riddle's Diary"]},
  
  {"id":2,
  "answer":1,
  "question":"Which of these are not one of Hagrid's many pets?",
  "options":["Grawp","Fluffy","Aragog","Noberta"]},
  
  {"id":3,
  "answer":3,
  "question":"Which class did Severus Snape always want to teach?",
  "options":["Potions","Charms","Defense Against Dark Arts","Transfiguration"]},
  
  {"id":4,
  "answer":3,
  "question":"Which Hogwarts house did Moaning Myrtle belong in?",
  "options":["Gryffindor","Slytherin","Ravenclaw","Hufflepuff"]},
  
  {"id":5,
  "answer":2,
  "question":"What class did Neville end up teaching at Hogwarts?",
  "options":["Astronomy","Herbology","Charms","Muggle Studies"]}
];

let question = document.getElementById("question");

let aOption = document.getElementById("a_option");
let bOption = document.getElementById("b_option");
let cOption = document.getElementById("c_option");
let dOption = document.getElementById("d_option");

let answers = document.getElementsByClassName("answer");

let quizNumber = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      answers[i].checked = false;
    }
  }

  question.innerText = data[quizNumber]["question"];
  aOption.innerText = data[quizNumber]["a"];
  bOption.innerText = data[quizNumber]["b"];
  cOption.innerText = data[quizNumber]["c"];
  dOption.innerText = data[quizNumber]["d"];
}

let button = document.getElementById("button");
button.addEventListener("click", function () {
  let userAnswer = null;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked == true) {
      userAnswer = answers[i].id;
    }
  }

  if (userAnswer) {

    if (userAnswer == data[quizNumber]["correct"]) {
      score++;
    }

    console.log("score ===> ", score);
    quizNumber++;
    if (quizNumber < data.length) {
      loadQuiz();
    } else {
      let header = document.getElementById("header");
      header.innerHTML = `
        <h1> Your Score ${score} out of ${data.length} </h1>
      `;

      button.innerText = "Double to Reload Your Quiz";
      button.style.fontSize = "16px";
    }
  }
});

button.addEventListener("dblclick", function () {
  location.reload();
});