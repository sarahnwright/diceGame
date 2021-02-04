function getRandom () {
    let showImage = document.getElementById("showImage");
    var randomNumber = Math.floor(Math.random() *6) +1;
        if (randomNumber == 1) showImage.innerHTML = '<img class="image" src="diceOne.png">';
        else if (randomNumber == 2) showImage.innerHTML = '<img class="image" src="diceTwo.png">';
        else if (randomNumber == 3) showImage.innerHTML = '<img class="image" src="diceThree.png">';
        else if (randomNumber == 4) showImage.innerHTML = '<img class="image" src="diceFour.png">';
        else if (randomNumber == 5) showImage.innerHTML = '<img class="image" src="diceFive.png">';
        else  showImage.innerHTML = '<img class="image" src="diceSix.png">';
}

