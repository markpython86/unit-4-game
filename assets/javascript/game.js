$(document).ready(function() {

var arr = [];


for (var i = 0; i < 4; i++) {
var a = Math.floor(Math.random() * 12)+1; 
	arr[i] = a;
	console.log(arr);
}


$('#red').click(function(){
    this.value = arr[0];
    $(".randomNumber").text(this.value);
});
$('#blue').click(function(){
    this.value = arr[1];
    $(".randomNumber").text(this.value);
});
$('#gold').click(function(){
    this.value = arr[2];
    $(".randomNumber").text(this.value);
});
$('#green').click(function(){
    this.value = arr[3];
    $(".randomNumber").text(this.value);
});
});

// var e = Math.floor(Math.random() * 120) +19;



// console.log(arr[Math.floor(Math.random() * 4)]);
// console.log(arr[Math.floor(Math.random() * 4)]);
// console.log(arr[Math.floor(Math.random() * 4)]);
// console.log(arr[Math.floor(Math.random() * 4)]);



