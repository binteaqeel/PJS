// function print(name){
//     console.log(name);
// }
// print("FATIMA");

// function add(a,b){
//     return a+b;
// }

// console.log(add(5,4));

// function printinfo(name,grade,age,crs1,crs2,crs3,crs4,crs5){
//  console.log(name + "<br/>" + grade + "<br/>" + age+ "<br/>" + crs1 + "<br/>" + crs2 + "<br/>" +crs3 + "<br/>" + crs4 + "<br/>" + crs5 );
// }
// stdname = prompt("PLEASE ENTER YOUR NAME:");
// stdgrade = prompt("PLEASE ENTER YOUR GRADE:");
// stdage = prompt("PLEASE ENTER YOUR AGE:");
// stdcrs1 = prompt("PLEASE ENTER YOUR COURSE 1:");
// stdcrs2 = prompt("PLEASE ENTER YOUR COURSE 2:");
// stdcrs3 = prompt("PLEASE ENTER YOUR COURSE 3:");
// stdcrs4 = prompt("PLEASE ENTER YOUR COURSE 4:");
// stdcrs5 = prompt("PLEASE ENTER YOUR COURSE 5:");
// printinfo(stdname,stdgrade,stdage,stdcrs1,stdcrs2,stdcrs3,stdcrs4,stdcrs5);


let crct_number = 88;
let user_number = prompt("PLEASE GUESS A NUMBER:")
while(user_number!=crct_number){
    user_number = prompt("YOU GUESSED WRONG NUMBER ---- GUESS AGAIN! ")
}

swal({
    title: "YOU WON",
    timer: 2000
  });
