var p1Score, p2Score, result;
function diceGenerator (range) {
    var dice = Math.floor(Math.random() * range) + 1;
    return dice;
}

p1Score = diceGenerator(6);
p2Score = diceGenerator(6);

const p1dice = document.querySelectorAll("#player1-dice > div");
const p2dice = document.querySelectorAll("#player2-dice > div");

for (let i = 0; i < p1dice.length; i++) {
    if (i + 1 === p1Score) {
        p1dice[i].classList.remove("invisible");
    }
    else {
        p1dice[i].classList.add("invisible");
    }
    if (i + 1 === p2Score) {
        p2dice[i].classList.remove("invisible");
    }
    else {
        p2dice[i].classList.add("invisible");
    }
}

if (p1Score > p2Score) {
    document.getElementById("notification").innerHTML = "Player 1 Wins !!"
}
else if (p1Score < p2Score) {
    document.getElementById("notification").innerHTML = "Player 2 Wins !!"
}
else {
    document.getElementById("notification").innerHTML = "It's a draw !!";
}