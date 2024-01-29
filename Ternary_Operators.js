// let grade = prompt("PLEASE ENTER YOUR GRADE");
// let result = grade == "A" || grade == "B" || grade == "C" || grade=="D" ? "YOU PASSED!" : "YOU FAILED!";
// console.log(result);

let grade = prompt("PLEASE ENTER YOUR GRADE");
let percentage = prompt("PLEASE ENTER YOUR PERCENTAGE");
let result = grade == "A" && percentage == 90  || grade == "B" && percentage == 80 || grade == "C" && percentage == 70 || grade=="D" && percentage == 60 ? "YOU PASSED!" : "YOU FAILED!";
console.log(result);