



function validity(){
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let number = document.getElementById('number').value;

    var namecheck = /^[A-Za-z]+$/;
    var numberscheck = /^[0-9]+$/;
    var paswordcheck = /^[0-9a-zA-Z]+$/;
    var emailcheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(namecheck.test(username)  ){
        document.getElementById("usernameerror").innerHTML="";
    }
    else{
        document.getElementById("usernameerror").innerHTML="INVALID USER NAME";
    }

    if(numberscheck.test(number)  ){
        document.getElementById("numbererror").innerHTML="";
    }
    else{
        document.getElementById("numbererror").innerHTML="INVALID NUMBER";
    }

    if(emailcheck.test(email)  ){
        document.getElementById("emailerror").innerHTML="";
    }
    else{
        document.getElementById("emailerror").innerHTML="INVALID EMAIL";
    }
    if(paswordcheck.test(password) ){
        document.getElementById("passworderror").innerHTML="";
    }
    else{
        document.getElementById("passworderror").innerHTML="INVALID PASSWORD";
    }
    if(namecheck.test(username) && numberscheck.test(number) && emailcheck.test(email) && paswordcheck.test(password)){
      alert("YOUR FORM IS SUBMITTED");
    }

   
    
}
