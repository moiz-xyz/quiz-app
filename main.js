let mobilenav = document.querySelector(".mobile-nav");
let cross = document.getElementById("cross");
let bars = document.getElementById("bars");
function show (){
  mobilenav.style.display = "block"
}
function hide (){
    mobilenav.style.display = "none"
}
function check (event){
    event.preventDefault();
    let data = localStorage.getItem("save");
     let save = data ? JSON.parse(data) : [];
    
    let found = save.some(save => save.email);
     if (found){
           window.location.href = "/editor/index.html";
     }
     if (!found){
         Swal.fire({
             icon: "error",
             title: "Signup",
             text: "You are not signed up",
             footer: '<a href="./Login& signup/signup.html">Signup?</a>'
           });
     }
     }
