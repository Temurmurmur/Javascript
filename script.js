//Задание 1
console.log("-------Задание1--------");
var i = 0, n = 0 , x=0;
while(i <= 100){
		n = i-1;
		x = 0;
		while(n>1){
			if(i%n == 0){
				x++;
			}
			n--;
		}
		if(x == 0 && i > 1){
			console.log(i);
		}
	i++;
}

//Задание2
console.log("-------Задание2--------");
i=0;
do{
	if(i==0){
		console.log(i+" - это ноль");
		i++;
		continue;
	}
	if(i%2 == 0){
		console.log(i+" - четное число");
	}
	else{
		console.log(i+" - нечетное число");
	}
	i++;
}
while(i<=10);

//Задание3
console.log("-------Задание3--------");

for(i=0;i<=9;console.log(i),i++){}

//Задание4
console.log("-------Задание4--------");
for (i=0;i<20;i++) {
	for(var j = 0;j<i;j++){
		console.log("*");
	}
	console.log("\n");
}


//В консоли выводилась цифра количества звезд проверил на странице так - 
// console.log("-------Задание4--------");
// for (i=0;i<20;i++) {
// 	for(var j = 0;j<i;j++){
// 		document.write("*");
// 	}
// 	document.write("<br>");
// }