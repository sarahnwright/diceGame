let resultTotal = document.getElementById("resultTotal");

function getRandom () {
    let showImage = document.getElementById("showImage");
    var randomNumber = Math.floor(Math.random() *6) +1;
    if (randomNumber == 1) {
        showImage.innerHTML = '<img class="image" src="diceOne.png">';
    } else if (randomNumber == 2) {
        showImage.innerHTML = '<img class="image" src="diceTwo.png">';
    } else if (randomNumber == 3) {
        showImage.innerHTML = '<img class="image" src="diceThree.png">';
    } else if (randomNumber == 4) {
        showImage.innerHTML = '<img class="image" src="diceFour.png">';
    } else if (randomNumber == 5) {
        showImage.innerHTML = '<img class="image" src="diceFive.png">';
    
    } else  {
        showImage.innerHTML = '<img class="image" src="diceSix.png">';
    }
    updateNumber(randomNumber);
    
}

function updateNumber(randomNumber){
    let runningTotal = 0;
    let numberElement = document.getElementById("number");
    let number = numberElement.innerHTML;

    if (numberElement && number != " ") {
        runningTotal = parseInt(number);
    }
    let newTotal = runningTotal + randomNumber;
    numberElement.innerHTML = newTotal;

    if (randomNumber == 1) {
        document.getElementById("message").innerHTML = "You've lost, better luck next time!";
        updateButtons();
    } else if (newTotal >= 20) {
        document.getElementById("message").innerHTML = "Congratulations, you're a winner!"
        updateButtons();
    }
}

function updateButtons() {
    document.getElementById("restartButton").hidden = false;
    document.getElementById("rollButton").disabled = true;
}

function restartGame() {
    document.location.reload();
}



