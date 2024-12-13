let data = [
    {
        question :"How does for loop starts",
        option1 : "for (i= 1to 5)",
        option2 : "for (i<5; i++)",
        option3 : "for (i= 0; i<5)",
        option4 : "for (i= 0; i <5; i++)",
        correct : "for (i= 0; i <5; i++)"
    },
    { question :"How do ypu insert a comment in css",
        option1 : "/ /",
        option2 : "/*",
        option3 : "- -",
        option4 : "<!---",
        correct :"/ /"
    },
    {
        question :"What is the correct way o write js array",
        option1 : "var arr= [ green.blue]",
        option2 : "arr [ green.blue]",
        option3 : "var arr= ( green.blue)",
        option4 : "var arr= { green.blue}",
        correct :"var arr= [ green.blue]"
    },
    {
        question :"WHich synata is correct to write hello world in alert",
        option1 : "alertbox('helllo world')",
        option2 : "msg('hello world')",
        option3 : "alert('hello world')",
        option4 : "msgbox('hello world')",
        correct : "alert('hello world')"
    },
    {
        question :"How do you call myfunction",
        option1 : "call function myfunction()",
        option2 : "myfunction",
        option3 : "myfunction()",
        option4 : "execute myfunction",
        correct : "myfunction()"
    },
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
    