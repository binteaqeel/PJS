let marq = document.getElementById('mrq');
let bulb = document.getElementById('imgs');
let btn = document.getElementById('btn');

btn.addEventListener('click' , buttonFunction)
function buttonFunction(){
    if(btn.textContent.includes('OFF') && marq.textContent.includes('ON')){
        marq.textContent="LIGHT IS OFF" ;
        marq.style.backgroundColor="red";
        bulb.src="off.JPG";
        bulb.style.boxShadow="10px 10px 10px red";
        btn.textContent="TURN OFF";
        btn.style.backgroundColor="red";
        btn.style.boxShadow="2px 2px 2px 2px rgb(228, 100, 100)";
    }
    else{
        marq.textContent="LIGHT IS ON" ;
        marq.style.backgroundColor="yellow";
        bulb.src="on.JPG";
        bulb.style.boxShadow="10px 10px 10px yellow";
        btn.textContent="TURN ON";
        btn.style.backgroundColor="yellow";
        btn.style.boxShadow="2px 2px 2px 2px rgb(237, 235, 117)"; 
    }
}
