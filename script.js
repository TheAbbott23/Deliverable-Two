

let name = prompt("Welcome to CG Mini Golf! What is your name?");
console.log(name)

let golfholes = prompt("Hi, "+ name +" Would you like to play 3 or 6 holes of mini-golf today?");
console.log(golfholes)

let total = 0;
let par = golfholes * 3;

for (let i = 0; i < golfholes; i++) {
    let score = Number (prompt("How many putts?"));
    total += score;
}

console.log ("Good game "+name+" Your total par was: 0")


if (total =par )    
{alert("Good game " + name + ". Your total par was: 0");
}

else if (total <par) {alert ("Great job, "+name+"! Your total par was -(par)");}

else if (total >par) {alert ("Nice try, "+name+"...Your total par was +(par)")}


















   
