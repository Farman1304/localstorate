var pakistanQuiz = [
  {
    question: "What is the national animal of Pakistan?",
    option1: "Markhor",
    option2: "Snow Leopard",
    option3: "Lion",
    option4: "Elephant",
    answer: "Markhor",
  },
  {
    question: "What is the national drink of Pakistan?",
    option1: "Tea",
    option2: "Sugarcane Juice",
    option3: "Lassi",
    option4: "Milk",
    answer: "Sugarcane Juice",
  },
  {
    question: "Who was the first Prime Minister of Pakistan?",
    option1: "Liaquat Ali Khan",
    option2: "Muhammad Ali Jinnah",
    option3: "Khawaja Nazimuddin",
    option4: "Ghulam Muhammad",
    answer: "Liaquat Ali Khan",
  },
  {
    question: "Which is the largest desert in Pakistan?",
    option1: "Thal Desert",
    option2: "Cholistan Desert",
    option3: "Thar Desert",
    option4: "Kharan Desert",
    answer: "Thar Desert",
  },
  {
    question: "When was the Lahore Resolution passed?",
    option1: "1940",
    option2: "1930",
    option3: "1947",
    option4: "1946",
    answer: "1940",
  },
  {
    question: "What is the highest military award of Pakistan?",
    option1: "Nishan-e-Haider",
    option2: "Sitara-e-Jurat",
    option3: "Tamgha-e-Shujaat",
    option4: "Hilal-e-Pakistan",
    answer: "Nishan-e-Haider",
  },
  {
    question: "Which city is known as the 'Manchester of Pakistan'?",
    option1: "Karachi",
    option2: "Lahore",
    option3: "Faisalabad",
    option4: "Sialkot",
    answer: "Faisalabad",
  },
  {
    question: "What is the total number of provinces in Pakistan?",
    option1: "3",
    option2: "4",
    option3: "5",
    option4: "6",
    answer: "4",
  },
  {
    question: "What is the national tree of Pakistan?",
    option1: "Neem",
    option2: "Banyan",
    option3: "Deodar",
    option4: "Pine",
    answer: "Deodar",
  },
  {
    question: "Which city is famous for its sports goods industry in Pakistan?",
    option1: "Lahore",
    option2: "Sialkot",
    option3: "Gujranwala",
    option4: "Rawalpindi",
    answer: "Sialkot",
  },
  {
    question: "What is the highest peak in Pakistan?",
    option1: "Nanga Parbat",
    option2: "Rakaposhi",
    option3: "K2",
    option4: "Broad Peak",
    answer: "K2",
  },
  {
    question: "Which Pakistani cricketer is known as the 'Sultan of Swing'?",
    option1: "Wasim Akram",
    option2: "Waqar Younis",
    option3: "Imran Khan",
    option4: "Shoaib Akhtar",
    answer: "Wasim Akram",
  },
  {
    question: "Which city is known as the 'Heart of Pakistan'?",
    option1: "Lahore",
    option2: "Karachi",
    option3: "Peshawar",
    option4: "Islamabad",
    answer: "Lahore",
  },
  {
    question: "What is the national monument of Pakistan?",
    option1: "Minar-e-Pakistan",
    option2: "Badshahi Mosque",
    option3: "Pakistan Monument",
    option4: "Faisal Mosque",
    answer: "Pakistan Monument",
  },
  {
    question: "Which country shares the longest border with Pakistan?",
    option1: "Afghanistan",
    option2: "India",
    option3: "Iran",
    option4: "China",
    answer: "India",
  }
];

localStorage.setItem('quizquestion', JSON.stringify(pakistanQuiz));

// modal //
var username = document.getElementById("username");
var userpassword = document.getElementById("userpassword");
var useremail = document.getElementById("useremail");

var userlogin = document.getElementById("username2");
var userpasswordlogin = document.getElementById("userpassword2");
var useremaillogin = document.getElementById("useremail2");

var signupwindow = document.getElementById("exampleModal1");
var loginwindow = document.getElementById("exampleModal2");

function startquiz() {
  alert(userlogin.value);
  alert(username.value);
  if (userlogin.value === username.value) {
    if (userpasswordlogin.value === userpassword.value) {
      if (useremaillogin.value === useremail.value) {
        window.location.href = "./quiz.html";
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "incorret username",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "incorret password",
      });
    }
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "incorret email",
    });
  }
}

// console.log(pakistanQuiz[0].option1)

var questions = document.getElementById("question");

var label1 = document.getElementById("label1");
var label2 = document.getElementById("label2");
var label3 = document.getElementById("label3");
var label4 = document.getElementById("label4");

var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");
var quizresult = document.getElementById("resultable");
var announcement = document.getElementById("reslutannouncment");
var percentage = document.getElementById("percentage");
var correctanswer = document.getElementById("canswer");
var qlist = document.getElementById("Q.list");
var totalQuestions = document.getElementById("totalquestion");
var admire = document.getElementById("admire");

var questionoption = document.getElementsByName("selectoption");

var quizasked = JSON.parse(localStorage.getItem(pakistanQuiz));


var questionnumber = 0;
var score = 0;


function showquestion() {
  resultable.style.display = "none";
  questions.innerHTML = pakistanQuiz[questionnumber].question;

  label1.innerHTML = pakistanQuiz[questionnumber].option1;
  label2.innerHTML = pakistanQuiz[questionnumber].option2;
  label3.innerHTML = pakistanQuiz[questionnumber].option3;
  label4.innerHTML = pakistanQuiz[questionnumber].option4;

  option1.value = pakistanQuiz[questionnumber].option1;
  option2.value = pakistanQuiz[questionnumber].option2;
  option3.value = pakistanQuiz[questionnumber].option3;
  option4.value = pakistanQuiz[questionnumber].option4;
}

function removeslection() {
  for (var i = 0; i < questionoption.length; i++) {
  
    questionoption[i].checked = false;
  }
}

function Next() {
  var radioChecked = false;
  for (var i = 0; i < questionoption.length; i++) {
    if (questionoption[i].checked) {
      radioChecked = true;

      if (questionoption[i].value === pakistanQuiz[questionnumber].answer) {
        score++;
      }
    }
  }

  if (!radioChecked) {
    Swal.fire({
      title: "No Option Selected",
      text: "selection one in option",
      icon: "error",
    });
  } else {
    if (questionnumber < pakistanQuiz.length - 1) {
      questionnumber++;
      removeslection();
      showquestion();
    } else {
      resultis();
    }
  }
}

function resultis() {
  qlist.style.display = "none";
  resultable.style.display = "block";

  var percentagevalue = Math.round((score / pakistanQuiz.length) * 100);
  var resultof = "";
  if (percentagevalue < 70) {
    announcement.innerHTML = "You are Failed!";
    announcement.className = "redtext";
    resultable.style.display = "block";
    totalQuestions.innerHTML = pakistanQuiz.length;
    correctanswer.innerHTML = score;
    percentage.innerHTML = "Percentage" + " " + percentagevalue + " " + "%";
  } else {
    admire.innerHTML = "Congratulation";
    admire.className = "greentext";
    announcement.innerHTML = " You are Passed !";
    announcement.className = "greentext";

    // announcement.innerHTML = resultstatus;
    percentage.innerHTML = "Percentage" + " " + percentagevalue + " " + "%";
    correctanswer.innerHTML = score;
    totalQuestions.innerHTML = pakistanQuiz.length;
  }
}

var checkstatus = 'quizattempted';




if (localStorage.getItem(checkstatus)=== null) {
  localStorage.setItem (checkstatus , 'false');
}
 if(resultis ()) {
  localStorage.setItem (checkstatus , 'true')
 }

if(localStorage.getItem (checkstatus , 'true')) {
  var updatestatus = document.getElementById('forstatus').innerHTML = 'Quiz attempted'
} 
window.onload = showquestion();
