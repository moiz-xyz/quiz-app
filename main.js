let mobilenav = document.querySelector(".mobile-nav");
let cross = document.getElementById("cross");
let bars = document.getElementById("bars");

function show() {
  mobilenav.style.display = "block";
}

function hide() {
  mobilenav.style.display = "none";
}

function check(event) {
  event.preventDefault();

  let data = localStorage.getItem("save");
  let save = data ? JSON.parse(data) : [];

  let found = save.some(user => user.email);

  if (found) {
    console.log("User found. Navigating to the quiz.");
    window.location.href = event.currentTarget.href;
  } else {
    Swal.fire({
      icon: "error",
      title: "Signup Required",
      text: "You are not signed up.",
      footer: '<a href="./Login& signup/signup.html">Signup?</a>'
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.subjects a'); 

  links.forEach(link => {
    link.addEventListener('click', check); 
  });
});
