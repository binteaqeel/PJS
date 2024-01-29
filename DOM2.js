let myvariable = document.getElementById('myid');

myvariable.textContent = "ANAPPLE A DAY KEEPS DOCTOR AWAY!";
myvariable.id = "hello";
myvariable.classList.add("fatima");
myvariable.classList.remove("fatima");
myvariable.style.backgroundColor="yellow";
myvariable.style.padding="20px";
myvariable.style.textAlign="center";

let myvariable2 = document.getElementsByClassName('myclass');

myvariable2[0].textContent = "ABCD";
myvariable2[0].style.color = "white";
myvariable2[0].style.backgroundColor = "purple";
myvariable2[0].id = "hi";
myvariable2[0].classList.add("class1");
myvariable2[0].style.textAlign = "center";
myvariable2[0].style.fontSize = "xx-large";

let myvariable3 = document.createElement('p');

myvariable2[0].appendChild(myvariable3);

myvariable3.textContent="HELLO";

let myvariable4 =document.createElement('img');

myvariable3.appendChild(myvariable4);

myvariable4.src="Capture.JPG";

