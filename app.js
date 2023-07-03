const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            {text: "(A) Hyper Trainer Marking Language", correct: false},
            {text: "(B) Hyper Text Markup Language", correct: true},
            {text: "(C) Hyper Text Marketing Language", correct: false},
            {text: "(D) Hyper Text Markup Leveler", correct: false},
        ]
    },
    {
        question: "< body > Is this an opening tag or a closing tag?",
        answers: [
            {text: "(A) Closing", correct: false},
            {text: "(B) Self Closing", correct: false},
            {text: "(C) Opening", correct: true},
            {text: "(D) Self Opening", correct: false},
        ]
    },
    {
        question: "Meta tags always go inside the _______ element?",
        answers: [
            {text: "(A) Header", correct: false},
            {text: "(B) Body", correct: false},
            {text: "(C) Footer", correct: false},
            {text: "(D) Head", correct: true},
        ]
    },
    {
        question: "What is an element that does not have a closing tag called?",
        answers: [
            {text: "(A) Stand alone element", correct: false},
            {text: "(B) Empty element", correct: true},
            {text: "(C) Closed element", correct: false},
            {text: "(D) Closed element", correct: false},
        ]
    },
    {
        question: "What should values always be enclosed in?",
        answers: [
            {text: "(A) Quotation marks", correct: true},
            {text: "(B) Parenthesis", correct: false},
            {text: "(C) Commas", correct: false},
            {text: "(D) Object", correct: false},
        ]
    },
    {
        question: "What is always a welcome page, and explains the purpose or topic of the site?",
        answers: [
            {text: "(A) About Page", correct: false},
            {text: "(B) Error 404", correct: false},
            {text: "(C) Contact Us", correct: false},
            {text: "(D) Homepage", correct: true},
        ]
    },
    {
        question: "What is the difference between an opening tag and a closing tag?",
        answers: [
            {text: "(A) Opening tag has a / in front", correct: false},
            {text: "(B) Closing tag has a / in front", correct: true},
            {text: "(C) There is no difference", correct: false},
            {text: "(D) They are the same", correct: false},
        ]
    },
    {
        question: "< br  / > What type of tag is this?",
        answers: [
            {text: "(A) A broken one", correct: false},
            {text: "(B) An opening tag", correct: false},
            {text: "(C) Break tag", correct: true},
            {text: "(D) One tag like that", correct: false},
        ]
    },
    {
        question: "Who is making the Web standards?",
        answers: [
            {text: "(A) Elon Musk", correct: false},
            {text: "(B) Chrome", correct: false},
            {text: "(C) The World Wide Web Consortium", correct: true},
            {text: "(D) Facebook and Instagram", correct: false},
        ]
    },
    {
        question: "HTML files are saved by default with the extension?",
        answers: [
            {text: "(A) .html", correct: true},
            {text: "(B) .htlm", correct: false},
            {text: "(C) .htm", correct: false},
            {text: "(D) .hmlt", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuize(){
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextBtn.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
}else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButton.children).forEach(button =>{
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;
});
nextBtn.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Start Again ✌";
    nextBtn.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextBtn.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuize();
    }
})
startQuize();