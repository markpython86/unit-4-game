

$(document).ready(function() {
	// declaring logic
	var totalScore = 0;
	var win;
	var lose;
	var winText = 0;
	var loseText = 0;
	var a = Math.floor(Math.random() * 12)+1; 
	var b = Math.floor(Math.random() * 12)+1; 
	var c = Math.floor(Math.random() * 12)+1; 
	var d = Math.floor(Math.random() * 12)+1; 
	var randomNumber = Math.floor(Math.random() * (120-19))+19;
	$(".randomNumber").text(randomNumber);



	// crystal function when click any crystal take the value and added to the totalScore
	function crystals(){		
		console.log(a);
		console.log(b);
		console.log(c);
		console.log(d);
		// red crystal on click function
		$('#red').click(function(){
		parseInt(totalScore+= d);
		console.log(d);
		$("#totalScore").text(totalScore);
	    checkWinOrLose();
		});
		// blue crystal on click function		
		$('#blue').click(function(){
			parseInt(totalScore += a);
			console.log(a);
			$("#totalScore").text(totalScore);
	    	checkWinOrLose();
		});
		// gold crystal on click function
		$('#gold').click(function(){
			parseInt(totalScore+= b);
			console.log(b);
			$("#totalScore").text(totalScore);
	    	checkWinOrLose();
		});
		// green crystal on click function
		$('#green').click(function(){
			parseInt(totalScore+= c);
			console.log(c);
			$("#totalScore").text(totalScore);
	    checkWinOrLose();
		});

	}
	// reset the game total score and redeclare the variables for each crystal once win or lose
	function resetScore(){
		setTimeout(function(){
   		$('#showWin').hide();
   		$('#showLose').hide();
		}, 4000);
		totalScore = 0;
		$("#totalScore").text(totalScore);
		a = Math.floor(Math.random() * 12)+1; 
		b = Math.floor(Math.random() * 12)+1; 
		c = Math.floor(Math.random() * 12)+1; 
		d = Math.floor(Math.random() * 12)+1; 
		console.log(a);
		console.log(b);
		console.log(c);
		console.log(d);		
	}
	//update the score to be matched 
	function updateScoreToBeMatched(){
		if (win === true || lose ===true){
		randomNumber = Math.floor(Math.random() * (120-19))+19;
		$(".randomNumber").text(randomNumber);
		}
	}
	function checkWinOrLose(){
		if (totalScore === randomNumber){
			console.log("youwin!!!");
			win = true;
			winText++;
			console.log("wins"+winText);
			$(".wins").text("Wins: "+winText);
			$('#showWin').show();
			resetScore();
			updateScoreToBeMatched();

		} else if ( randomNumber <= totalScore){
			console.log("lose!!!");
			lose = true;
			loseText++;
			$(".loses").text("Loses: "+loseText);
			console.log("loses" +loseText);
			$('#showLose').show();
			resetScore();
			updateScoreToBeMatched();
		}
	}

			
	//run functions when page refresh
	updateScoreToBeMatched();
	crystals();




}); // End of Document ready

