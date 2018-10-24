$(document).ready(function() {
	var clearArr = []


	var totalScore = 0;

	var randomNumber;

	var win;

	var lose;

	var gold;
	var red;
	var blue;
	var green;

	// var crystals = ["red", "blue", "gold", "green"];

	function crystals(){
		// arr.length = totalScore;
		// totalScore = 0
		// var arr = [];
		// arr.length = totalScore;
		// for (var i = 0; i < 4; i++) {
		// 	var arr = [];
		// 	i = Math.floor(Math.random() * 12)+1; 
		// 	arr.push(i);
			
		// }
		a = Math.floor(Math.random() * 12)+1; 
		b = Math.floor(Math.random() * 12)+1; 
		c = Math.floor(Math.random() * 12)+1; 
		d = Math.floor(Math.random() * 12)+1; 

		$('#red').click(function(){
		// win = true;
		// this.value = arr[3];
		// $('#red').attr("value", (Math.floor(Math.random() * 12) + 1));
		// console.log(this.value)
		parseInt(totalScore+= d);
		console.log(d);
		$("#totalScore").val(totalScore);
	    // updateNumberToBEMatched();
	    checkWin();
	    // checkLose();

		});
		$('#blue').click(function(){
			// this.value = arr[0];
			// $('#blue').attr("value", (Math.floor(Math.random() * 12) + 1));
			parseInt(totalScore += a);
			console.log(a);
			$("#totalScore").text(totalScore);
	    checkWin();
	    // checkLose();
		});
		$('#gold').click(function(){
			// this.value = arr[1];
			 // $('#gold').attr("value", (Math.floor(Math.random() * 12) + 1));
			parseInt(totalScore+= b);
			console.log(b);
			$("#totalScore").text(totalScore);
	    checkWin();
	    // checkLose();
		});
		$('#green').click(function(){
			// lose = true;
			this.value = "";
			// x = $('#blue').attr("value", (Math.floor(Math.random() * 12) + 1));
			parseInt(totalScore+= c);
			console.log(c);
			$("#totalScore").text(totalScore);
			// updateNumberToBEMatched();
	    checkWin();
	    // checkLose();
		});
			// checkWin();
			// checkLose();
			// console.log(arr);
	// 		console.log(this);
			
	// 		console.log(this);
	// 		console.log(this);
	// 		console.log(this);

	}

	function resetScore(){
		// arr.length = 0;
		totalScore = 0;
		$("#totalScore").text(totalScore);
		
	}
	// randomNumber = Math.floor(Math.random() * (120-19))+19;
	// 	console.log(arr);
	// console.log(randomNumber);


	// function updateNumberToBEMatched(){
	// 	if (win === true || lose ===true){
	// 		randomNumber = Math.floor(Math.random() * (120-19))+19;
	// 		$(".randomNumber").text(randomNumber);
	// 		resetScore();
	// 		// crystals();
			



	// 	}
	// }

	function updateScreen(){
		randomNumber = Math.floor(Math.random() * (120-19))+19;
		$(".randomNumber").text(randomNumber);
		// $("#totalScore").text("0");
		resetScore();

		crystals();
	}


	function checkWin(){
		if (totalScore === randomNumber){
			// arr = [];
			console.log("youwin!!!");
			updateScreen();
			// crystals();
			// resetScore();
		} else if (totalScore >= randomNumber){
			// arr = [];
			console.log("lose!!!");
			updateScreen();
			// crystals();
			// resetScore();
		}
	}

	// function checkLose(){
	// 	if (totalScore >= randomNumber){
	// 		// arr = [];
	// 		console.log("lose!!!");
	// 		updateScreen();
	// 		// crystals();
	// 		// resetScore();
	// 	}
	// }
	// // function action(){
	// 	if (red === true){
	// 		red();
	// 	}else if (blue === true){
	// 		blue();
	// 	}else if (gold === true){
	// 		gold();
	// 	}else if (green === true){
	// 		green();
	// 	}
	// }






	updateScreen();
	// crystals();



});

// var e = Math.floor(Math.random() * 120) +19;



// console.log(arr[Math.floor(Math.random() * 4)]);
// console.log(arr[Math.floor(Math.random() * 4)]);
// console.log(arr[Math.floor(Math.random() * 4)]);
// console.log(arr[Math.floor(Math.random() * 4)]);



