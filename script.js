

let name = prompt("Welcome to CG Mini Golf! What is your name?");
console.log(name)

let golfholes = prompt("Hi, "+ name +" Would you like to play 3 or 6 holes of mini-golf today?");
console.log(golfholes)

let total = 0;
let par = golfholes * Number (3);
console.log(par)

for (let i = 0; i < golfholes; i++) {
    let score = Number (prompt("How many putts on hole?"));
    total += score;
}
console.log (total)

if (total === par )    
{alert("Good game " + name + ". Your total par was: 0");
}

else if (total <par) {alert ("Great job, "+name+"! Your total par was" +(total-par)+".") } 

else if (total >par) {alert ("Nice try, "+name+"...Your total par was "+(total-par)+".")}



















   
