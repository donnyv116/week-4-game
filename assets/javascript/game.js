$(document).ready(function(){
	var Random=Math.floor(Math.random()*101)+19;
	console.log(Random)

$('#randomNumber').text(Random);

var num1= Math.floor(Math.random()*12)+1
var num2= Math.floor(Math.random()*12)+1
var num3= Math.floor(Math.random()*12)+1
var num4= Math.floor(Math.random()*12)+1
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)

var userTotal = 0;
var wins = 0;
var losses = 0;

$('#numberWins').text(wins);
$('#numberLosses').text(losses);

function reset(){
	Random = Math.floor(Math.random()*101)+19;
	$('#randomNumber').text(Random);
	num1 = Math.floor(Math.random()*12)+1;
	num2 = Math.floor(Math.random()*12)+1;
	num3 = Math.floor(Math.random()*12)+1;
	num4 = Math.floor(Math.random()*12)+1;
		userTotal = 0;
	$('#finalTotal').text(userTotal);
}
function win(){
	alert("You Win!");
	wins++;
	$('#numberWins').text(wins);
	reset();
}
function loss(){
	alert("You Lose!");
	losses++;
	$('#numberLosses').text(losses);
	reset()
}
	$('#blue').on('click',function(){
		userTotal = userTotal + num1;
		console.log('#blue')
	$('#finalTotal').text(userTotal);
		if (userTotal == Random){
			win();
		}
		else if (userTotal > Random){
			loss();
		}
	})
	$('#red').on('click',function(){
		userTotal = userTotal + num2;
		console.log('#red')
	$('#finalTotal').text(userTotal);
		if (userTotal == Random){
			win();
		}
		else if (userTotal > Random){
			loss();
		}
	})
	$('#green').on('click',function(){
		userTotal = userTotal + num3;
	$('#finalTotal').text(userTotal);
		if (userTotal == Random){
			win();
		}
		else if (userTotal > Random){
			loss();
		}
	})
	$('#yellow').on('click',function(){
		userTotal = userTotal + num4;
	$('#finalTotal').text(userTotal);
		if (userTotal == Random){
			win();
		}
		else if (userTotal > Random){
			loss();
		}
	});

});