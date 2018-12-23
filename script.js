//Задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c); // 2 Значение 'а' увеличивается  в этом действии и возвращает нам 2
d = b++; alert(d); // 1 Значение 'b' увеличивается но не возаращает измененное значение в этом действии
c = (2+ ++a); alert(c); // 5 Тут так же сразу в примере меняем а , то есть увеличиваем до 3 и получаем в итоге 5
d = (2+ b++); alert(d); // 4 Тут мы увеличили b но в примере b = 2 , поэтому d = 4
alert(a); // 3 a = 3 это понятно 
alert(b); // 3 b = 3 потому что в 5 строчке мы уже описали что с ней произошло

//Задание 2
var a = 2;
var x = 1 + (a *= 2);//x =  5 
alert(x);

//Задание 3
a = Number(prompt("Задайте произвольное целочисленное значение а :"));
b = Number(prompt("Задайте произвольное целочисленное значение b :"));

if(a >= 0 && b >= 0){
	alert(a-b);
}
else if(a < 0 && b < 0){
	alert(a * b);
}
else{
	alert(a+b);
}

//Задание 4

a = Number(prompt("Задайте значение 'a' в промежутке от 0 до 15 числа выведутся после всех alert :"));
switch(a){
	case 0:
		document.write("0 ");

	case 1:
		document.write("1 ");

	case 2:
		document.write("2 ");

	case 3:
		document.write("3 ");

	case 4:
		document.write("4 ");

	case 5:
		document.write("5 ");

	case 6:
		document.write("6 ");

	case 7:
		document.write("7 ");

	case 8:
		document.write("8 ");

	case 9:
		document.write("9 ");

	case 10:
		document.write("10 ");

	case 11:
		document.write("11 ");

	case 12:
		document.write("12 ");

	case 13:
		document.write("13 ");

	case 14:
		document.write("14 ");

	case 15:
		document.write("15 ");
	break;

	default:
		alert("Значение не верно");
}



// Задание 5

function sum(a,b){
	return a+b;
}

function razn(a,b){
	return a-b;
}

function proz(a,b){
	return a*b;
}

function del(a,b){
	return a/b;
}

// Задание 6

function multiFunc(a,b,operation){
	switch (operation){
		case "+":
			return sum(a,b);
		break;

		case "-":
			return razn(a,b);
		break;

		case "*":
			return proz(a,b);
		break;

		case "/":
			return del(a,b);
		break;

		default:
			alert("Что то не так :(");
	}
}

a = Number(prompt("Мультифункция а :"));
b = Number(prompt("Мультифункция b :"));
var operation = prompt("Мультифункция операция :");
alert(multiFunc(a,b,operation));

//Задание 7
alert(null == 0); //false , может потому что null значение которое ничему не равно , пустое значение.


//Задание 8 

function myPow(val,pow){
	if(pow != 1){
		return val*myPow(val,pow-1)
	}
	else{
		return val;
	}
	
}

a = Number(prompt("Возвести число а :"));
b = Number(prompt("В степень  b :"));
alert(myPow(a,b));