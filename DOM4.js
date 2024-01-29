let box1 = document.getElementById('id1');

let input_field = document.createElement('input');
box1.appendChild(input_field);
input_field.type="text";
input_field.placeholder="Enter Something";

let button1 = document.createElement('button');
box1.appendChild(button1);
button1.innerHTML="CLICK HERE";

button1.addEventListener('click' , wow);
function wow(){
    if(input_field === "Fatima"){
        alert("YOUR FIELD IS NULL!");
    }
    else{
        alert("Sucessfully entered the value")
    }
}
