
var numDiv = {
	hundreds:0,
	tens:0,
	unit:0
};

function divide(number){
	var length = number.length;
	if(length == 3){
		numDiv.hundreds = Math.floor(number/100);
		number %= 100;
		length --;
	}
	if(length == 2){
		numDiv.tens = Math.floor(number/10);
		number %= 10;
		length --;
	}
	if(length == 1){
		numDiv.unit = number;
		length --;
		return numDiv;
	}
	else{
		console.log("Число превышает 999 ");
		return numDiv;
	}

}
var number = prompt("Введите число от 0 до 999");
divide(number);
console.log(numDiv);
