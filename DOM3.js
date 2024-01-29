let box1 = document.getElementById('div1');

let button1 = document.createElement('button');
box1.appendChild(button1);
button1.innerHTML="CLICK HERE!";
button1.addEventListener('click', myfunction)

function myfunction(){
    button1.innerHTML="YOU HAVE ALREADY CLICKED HERE!";
    button1.addEventListener('click', myfunction2)
}

function myfunction2(){
    button1.innerHTML="CLICK HERE!";
    button1.addEventListener('click', myfunction);
}
