let data = [
    {
        question :"What does HTML stands for",
        option1 : "Hyper Trainer Markup Language",
        option2 : "Hyper Text Marketing Language",
        option3 : "Hyper Text Markup Language",
        option4 : "Hyper Text Markup Leveler",
        correct : "Hyper Text Markup Language"
    },
    {
        question :"Which Html element is used to define the title of a docummet",
        option1 : "<head>",
        option2 : "<title>",
        option3 : "<header>",
        option4 : "<top>",
        correct : "<title>"
    },
    {
        question :"What is the puprpse of body tag in html",
        option1 : "It defines the document head section",
        option2 : "It containes all the content",
        option3 : "It is used to define the  main content of documnet",
        option4 : "It specfies the body of email content",
        correct :  "It is used to define the  main content of documnet"
    },
    {
        question :"WHich tag is used to create hyper links",
        option1 : "<hyperlink>",
        option2 : "<link>",
        option3 : "<a>",
        option4 : "<href>",
        correct : "<a>"
    },
    {
        question :"Which tag is used to display images in html",
        option1 : "<img>",
        option2 : "<a>",
        option3 : "<i>",
        option4 : "<p>",
        correct : "<img>"
    }
]
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
});

let score = 0;
let index = 0;
let ques = document.getElementById("ques");
let option1 = document.getElementById("option1");
let option2= document.getElementById("option2");
let option3= document.getElementById("option3");
let option4= document.getElementById("option4");
let btn = document.getElementById("next");
let timer = document.getElementById("timer");
let sec = 20;
let interval ;
function starttimer(){
 clearInterval(interval);
sec = 20 
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
        option[i].checked = false;
    }

    if(index > data.length-1){
        clearInterval(interval);
        btn.innerHTML = "Submit ";
        swalWithBootstrapButtons
        .fire({
            title: "Quiz ended",
            text: "Your Score is: " + score ,
            text: "Do you want to start the quiz again?", 
            icon: "success",
            showCancelButton: true,
            confirmButtonText: "Yes!",
            cancelButtonText: "No!",
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.href = "/index.html";
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Thanks for Playing :)",
                icon: "error"
              });
            }
          });

    
} else{
    ques.innerText = data[index].question;
    option1.innerText = data[index].option1;
    option2.innerText = data[index].option2;
    option3.innerText = data[index].option3;
    option4.innerText = data[index].option4;
    btn.disabled = true;
index++
}
starttimer();
}
nextquestion()
function buttondisplay() {
btn.disabled = false;
}
