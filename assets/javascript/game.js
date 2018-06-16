// Here we make our ready function
$(document).ready(function () {

	// Variables for wins and losses.
	var wins = 0;
	var loss = 0;

    // Variables for the crystals, score and target number.
	var targetNumber = 0
	var playerScore = 0;
	var btnGreen = 0
	var btnBlue = 0
	var btnRed = 0
	var btnPurple = 0

    // function to reset the game
	function reset() {
		targetNumber = Math.floor(Math.random() * 80) + 20;
		playerScore = 0;
		btnGreen = Math.floor(Math.random() * 12) + 1;
		btnBlue = Math.floor(Math.random() * 12) + 1;
		btnRed = Math.floor(Math.random() * 12) + 1;
		btnPurple = Math.floor(Math.random() * 12) + 1;
        
        document.getElementById("randNum scoreboard").innerHTML = targetNumber;
		return;
	}

	reset();

    // Here we add the crystals to the player score
	document.getElementById('crystalG').onclick = function () {
		playerScore += btnGreen;
	};
	document.getElementById('crystalB').onclick = function () {
		playerScore += btnBlue;
	};

	document.getElementById('crystalR').onclick = function () {
		playerScore += btnRed;
	};
	document.getElementById('crystalP').onclick = function () {
		playerScore += btnPurple;
	};

    // Here we decide when a player wins and losses.
	document.onclick = function () {
		document.getElementById("game").innerHTML = playerScore;
		if (playerScore > targetNumber) {
			document.getElementById("game").innerHTML = playerScore + " You lose";
			loss++;
			document.getElementById("loss").innerHTML = "Loss: " + loss;
			reset();
		} else
		if (playerScore == targetNumber) {
			document.getElementById("game").innerHTML = playerScore + " You Win";
			wins++;
			document.getElementById("wins").innerHTML = "Wins: " + wins;
			reset();
		}
	}



});
