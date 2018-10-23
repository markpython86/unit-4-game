$(document).ready(function() {

var arr = [];

var totalScore = 0


for (var i = 0; i < 4; i++) {
var a = Math.floor(Math.random() * 12)+1; 
	arr[i] = a;
	console.log(arr);
}


$('#red').click(function(){
    this.value = arr[0];
    $("#totalScore").text(totalScore);
    totalScore+=arr[0];
});
$('#blue').click(function(){
    this.value = arr[1];
    totalScore += arr[1];
    $("#totalScore").text(totalScore);
});
$('#gold').click(function(){
    this.value = arr[2];
    totalScore+= arr[2];
    $("#totalScore").text(totalScore);
});
$('#green').click(function(){
    this.value = arr[3];
    totalScore+= arr[3];
    $("#totalScore").text(totalScore);
});
});

// var e = Math.floor(Math.random() * 120) +19;



// console.log(arr[Math.floor(Math.random() * 4)]);
// console.log(arr[Math.floor(Math.random() * 4)]);
// console.log(arr[Math.floor(Math.random() * 4)]);
// console.log(arr[Math.floor(Math.random() * 4)]);



