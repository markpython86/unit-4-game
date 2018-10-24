$(document).ready(function() {

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
	function crystals(){		
		console.log(a);
		console.log(b);
		console.log(c);
		console.log(d);

		$('#red').click(function(){
		parseInt(totalScore+= d);
		console.log(d);
		$("#totalScore").text(totalScore);
	    checkWin();
		});
		$('#blue').click(function(){
			parseInt(totalScore += a);
			console.log(a);
			$("#totalScore").text(totalScore);
	    	checkWin();
		});
		$('#gold').click(function(){
			parseInt(totalScore+= b);
			console.log(b);
			$("#totalScore").text(totalScore);
	    	checkWin();
		});
		$('#green').click(function(){
			parseInt(totalScore+= c);
			console.log(c);
			$("#totalScore").text(totalScore);
	    checkWin();
		});

	}

	function resetScore(){
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

	function updateScreen(){
		if (win === true || lose ===true){
		randomNumber = Math.floor(Math.random() * (120-19))+19;
		$(".randomNumber").text(randomNumber);
		}
	}
	function checkWin(){
		if (totalScore === randomNumber){
			console.log("youwin!!!");
			win = true;
			winText++;
			console.log("wins"+winText);
			$(".wins").text("Wins: "+winText);
			resetScore();
			updateScreen();
		} else if ( randomNumber <= totalScore){
			console.log("lose!!!");
			lose = true;
			resetScore();
			loseText++;
			$(".loses").text("Loses: "+loseText);
			console.log("loses" +loseText);
			updateScreen();
		}
	}
	updateScreen();
	crystals();



});
