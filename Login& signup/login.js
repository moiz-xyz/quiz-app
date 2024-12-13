function login (){
     
     let data = localStorage.getItem("save");
     let save = data ? JSON.parse(data) : [];
     let incomingData = {
          email : document.getElementById("inp1").value,
          pass : document.getElementById("inp2").value
     }
    let found = save.some(save => save.email === incomingData.email && save.password === incomingData.pass );
     if (found){
           Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your have succesafully Login",
            showConfirmButton: false,
            timer: 7000
          });
          window.location.href = "/index.html";
     }
     else{
          Swal.fire({
               icon: "error",
               title: "Fields",
               text: "Please enter your valid details",
             });
     }
     }

