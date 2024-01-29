let sp = prompt("PLEASE ENTER FROM WHERE YOU WANT TO START THE LOOP: ");
let ep = prompt("PLEASE ENTER FROM WHERE YOU WANT TO END THE LOOP: ")
for(var i=sp;i<=ep;i++){
    if(i%2==0){
        console.log("EVEN",i);
    }else{
        console.log("ODD",i);
    }
}

let table = prompt("PLEASE ENTER THE TABLE YOU WANT TO PRINT: ");
let range = prompt("PLEASE ENTER TILL WHERE YOU WANT TO PRINT:");
for(let i=1;i<=range;i++){
    console.log(table + " X " + i + " = " + table*i);
}
