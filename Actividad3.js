//Exercise 1

var name = prompt("Enter your Name");
var age = parseInt(prompt("Enter your Age"));

if (age >= 18){
    console.log("You're allowed to enter");

    if( (name === "Mario") || (name === "Carlos")){ //We assume we receive the string as it is (first letter is uppercase)
        console.log("You can access the VIP section")
    }
}

// Exercise 2

var player1 = prompt("Introduce Piedra, Papel o Tijera"); //We assume we receive the string as it is (first letter is uppercase)
var player2 = prompt("Introduce Piedra, Papel o Tijera");

if (player1 == "Piedra"){
    switch(player2){
        case "Piedra":
            console.log("Draw");
        break;

        case "Papel":
            console.log("Player2 Wins");
        break;

        case "Tijera":
            console.log("Player1 Wins");
    }
}

if (player1 == "Papel"){
    switch(player2){
        case "Papel":
            console.log("Draw");
        break;

        case "Tijera":
            console.log("Player2 Wins");
        break;

        case "Piedra":
            console.log("Player1 Wins");
    }
}

if (player1 == "Tijera"){
    switch(player2){
        case "Tijera":
            console.log("Draw");
        break;

        case "Piedra":
            console.log("Player2 Wins");
        break;

        case "Papel":
            console.log("Player1 Wins");
    }
}