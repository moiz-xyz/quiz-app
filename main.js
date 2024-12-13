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



    // Select the elements to animate
    const welcome = document.querySelector('.welcome');
    const subjects = document.querySelector('.subjects');
    const html = document.querySelector('.Html');
    const css = document.querySelector('.css');
    const js = document.querySelector('.js');

    // Create an Intersection Observer to trigger when the elements come into view
    const observer2 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when in view
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target); // Stop observing after animation starts
            }
        });
    }, { threshold: 0.5 });

    // Start observing the elements
    observer2.observe(welcome);
    observer2.observe(subjects);
    observer2.observe(html);
    observer2.observe(css);
    observer2.observe(js);

    // Animation for each subject card with delay to make it more engaging
    const subjectObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__backInLeft');
                // Adding delays to each subject to appear one by one
                entry.target.style.animationDelay = `${index * 0.2}s`;
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    subjectObserver.observe(html);
    subjectObserver.observe(css);
    subjectObserver.observe(js);







const sections = document.querySelectorAll('.whyus > div');

    // Create an Intersection Observer to trigger when sections come into view
    const observer1 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when in view
                entry.target.classList.add('animate__animated', 'animate__backInLeft');
                observer.unobserve(entry.target); // Stop observing after animation starts
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    // Start observing each section
    sections.forEach(section => {
        observer1.observe(section);
    });




    const storySections = document.querySelectorAll('.story');

    // Create an Intersection Observer to trigger when the elements come into view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when in view
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                entry.target.querySelector('.img').classList.add('animate__animated', 'animate__slideInLeft');
                entry.target.querySelector('.content h3').classList.add('animate__animated', 'animate__fadeIn');
                entry.target.querySelector('.content p').classList.add('animate__animated', 'animate__fadeIn');
                entry.target.querySelector('.content button').classList.add('animate__animated', 'animate__fadeIn');
                entry.target.querySelector('#FAQs').classList.add('animate__animated', 'animate__fadeIn');
                observer.unobserve(entry.target); // Stop observing after animation starts
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the element is in view

    // Start observing all story sections
    storySections.forEach(section => {
        observer.observe(section);
    });
