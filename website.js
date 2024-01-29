let navbar = document.getElementById('navb');
let bcg = document.getElementById('bcg');
let btn = document.getElementById('btnShow');
let footer = document.getElementById('footer');
let cards = document.getElementsByClassName('cardclass');

btn.addEventListener('click' , changes)

function changes(){
    if(btn.textContent.includes("Light")){
        navbar.classList.add("navbar-dark");
        navbar.classList.add("bg-dark");
        navbar.classList.remove("navbar-light");
        navbar.classList.remove("bg-light");
        bcg.style.backgroundColor="white";
        btn.textContent="Dark";
        footer.style.color="white";
        footer.style.backgroundColor="black";
        cards[0].style.backgroundColor="black";
        cards[0].style.color="white";
        cards[1].style.backgroundColor="black";
        cards[1].style.color="white";
        cards[2].style.backgroundColor="black";
        cards[2].style.color="white";
        cards[3].style.backgroundColor="black";
        cards[3].style.color="white";
        cards[4].style.backgroundColor="black";
        cards[4].style.color="white";
        cards[5].style.backgroundColor="black";
        cards[5].style.color="white";
    }
    else{
        navbar.classList.add("navbar-light");
        navbar.classList.add("bg-light");
        navbar.classList.remove("navbar-dark");
        navbar.classList.remove("bg-dark");
        bcg.style.backgroundColor="black";
        btn.textContent="Light";
        footer.style.color="black";
        footer.style.backgroundColor="white";
        cards[0].style.backgroundColor="white";
        cards[0].style.color="black";
        cards[1].style.backgroundColor="white";
        cards[1].style.color="black";
        cards[2].style.backgroundColor="white";
        cards[2].style.color="black";
        cards[3].style.backgroundColor="white";
        cards[3].style.color="black";
        cards[4].style.backgroundColor="white";
        cards[4].style.color="black";
        cards[5].style.backgroundColor="white";
        cards[5].style.color="black";
    }
}