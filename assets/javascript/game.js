$(document).ready(function() {

var arr = [];

var totalScore = 0;

var randomNumber;

var win;

var lose;

function crystals(){
for (var i = 0; i < 4; i++) {
var a = Math.floor(Math.random() * 12)+1; 
	arr[i] = a;
}
$('#red').click(function(){
	// win = true;
    this.value = arr[0];
    $("#totalScore").text(totalScore);
    totalScore+=arr[0];
    // updateNumberToBEMatched();
    checkLose();
    checkWin();

});
$('#blue').click(function(){
    this.value = arr[1];
    totalScore += arr[1];
    $("#totalScore").text(totalScore);
    checkWin();
    checkLose();
});
$('#gold').click(function(){
    this.value = arr[2];
    totalScore+= arr[2];
    $("#totalScore").text(totalScore);
    checkWin();
    checkLose();
});
$('#green').click(function(){
	// lose = true;
    this.value = arr[3];
    totalScore+= arr[3];
    $("#totalScore").text(totalScore);
    updateNumberToBEMatched();
    checkWin();
    checkLose();

});
}


randomNumber = Math.floor(Math.random() * (120-19))+19;
	console.log(arr);
console.log(randomNumber);


function updateNumberToBEMatched(){
	if (win === true || lose ===true){
		randomNumber = Math.floor(Math.random() * (120-19))+19;
		$(".randomNumber").text(randomNumber);



	}
}

function updateScreen(){
	randomNumber = Math.floor(Math.random() * (120-19))+19;
	$(".randomNumber").text(randomNumber);
	$("#totalScore").text("0");
	crystals();
}


function checkWin(){
	if (totalScore === randomNumber){
		console.log("youwin!!!");
		updateScreen();
		crystals();
	}
}

function checkLose(){
	if (totalScore >= randomNumber){
		console.log("lose!!!");
		updateScreen();
		crystals();
	}
}
// function action(){
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
crystals();



});

// var e = Math.floor(Math.random() * 120) +19;



// console.log(arr[Math.floor(Math.random() * 4)]);
// console.log(arr[Math.floor(Math.random() * 4)]);
// console.log(arr[Math.floor(Math.random() * 4)]);
// console.log(arr[Math.floor(Math.random() * 4)]);



