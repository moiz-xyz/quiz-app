
function signup (){
    let storage = localStorage.getItem("save");
    let save = storage ? JSON.parse(storage) : [];
    let signupdata = {
        name :document.getElementById("inp3").value,
        email :document.getElementById("inp4").value,
        password :document.getElementById("inp5").value
    }
    let ifempty = signupdata.email=== "" || signupdata.name === "" || signupdata.password === "";
    let emailExists = save.some(user => user.email === signupdata.email);
    let lesspassword = signupdata.password.length < 8;


       if(ifempty){
        Swal.fire({
            icon: "error",
            title: "Fields",
            text: "All fields are required",
          });
        return;
       }
       if(lesspassword){ 
        Swal.fire({
            icon: "error",
            title: "Password",
            text: "Password cannot be less than 8 ",
          });
       return
       }
       if (emailExists){
        Swal.fire({
            icon: "error",
            title: "Email",
            text: "Email already exists please login or try another one",
            footer: '<a href="./login index.html">Login?</a>'
          });
        
        }  
        return;

    save.push(signupdata);
    let stringify = JSON.stringify(save);
    localStorage.setItem("save",stringify);
    Swal.fire({
        icon: "success",
        title: "Succsfull",
        text: "You have signed up now login and enjoy",
        footer: '<a href="./login index.html">Login?</a>'
    });
    document.getElementById("inp3").value = "";
document.getElementById("inp4").value = "";
document.getElementById("inp5").value = "";
}

    
   

