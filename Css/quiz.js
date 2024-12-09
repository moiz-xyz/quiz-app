let data = [
    {
        question :"What does CSS stands for",
        option1 : "Color full style sheets",
        option2 : "Cascading Style sheets",
        option3 : "Cascading Style sheet",
        option4 : "Creative Style sheets",
        correct : "Cascading Style sheet"

    },
    {
        question :"Which Html element is used to define the inline styles",
        option1 : "<head>",
        option2 : "<title>",
        option3 : "<style>",
        option4 : "<class>",
        correct : "<style>"
    },
    {
        question :"How do ypu insert a comment in css",
        option1 : "//",
        option2 : "/*",
        option3 : "--",
        option4 : "<!---",
        correct : "/*"
    },
    {
        question :"WHich tag is used to change the background color",
        option1 : "color",
        option2 : "bgcolor",
        option3 : "background color",
        option4 : "background-color",
        correct : "background-color"
    },
    {
        question :"Which tag is used to apply styles to all p elements",
        option1 : "p{ }",
        option2 : ".p[ ]",
        option3 : ".p{ }",
        option4 : "all.p{ }",
        correct : "p{}"
    }
]

let score = 0;
let index = 0;
let ques = document.getElementById("ques");
let option1 = document.getElementById("option1");
let option2= document.getElementById("option2");
let option3= document.getElementById("option3");
let option4= document.getElementById("option4");
let btn = document.getElementById("next");
let timer = document.getElementById("timer");
let sec = 10;
let interval ;
function starttimer(){
 clearInterval(interval);
sec = 10 
interval= setInterval(function (){
        timer.innerHTML = sec
        if(sec <= 0){
            clearInterval(interval);
        nextquestion();
    }else{
        sec--
    }
}, 1000);
}

function nextquestion(){
    let option = document.getElementsByName("answers")
    for(let i = 0 ; i < option.length; i++){
        if(option[i].checked){
            let selected = option[i].value;
            let compare = data[index-1][`option${selected}`];
            let correct_ans = data[index-1].correct;
            if(compare === correct_ans){
                score ++
            }
        }
        option[i].checked = false
    }
    
    if(index > data.length-1){
        console.log("quiz end");
        console.log(score);
        clearInterval(interval);

    
} else{
    ques.innerText = data[index].question;
    option1.innerText = data[index].option1;
    option2.innerText = data[index].option2;
    option3.innerText = data[index].option3;
    option4.innerText = data[index].option4;
index++
}
starttimer();
}
nextquestion()
function buttondisplay() {
btn.disabled = false;
}
