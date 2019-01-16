var mass = [
	{
		name:"Тапочки",
		price:"200 Р",
		img:"img/tapki.jpg"
	},

	{
		name:"Пицца",
		price:"400 Р",
		img:"img/pizza.jpg"
	},

	{
		name:"Машина",
		price:"10000 Р",
		img:"img/pejo.jpg"
	},

	{
		name:"Кольцо",
		price:"11 200 Р",
		img:"img/ring.jpg"
	},

	{
		name:"Эйф.Б.",
		price:"23200 Р",
		img:"img/paris.jpg"
	},
	{
		name:"Пирамиды",
		price:"5020 Р",
		img:"img/piramidi.jpg"
	},

	{
		name:"Воздух",
		price:"100 Р",
		img:"img/breath.jpg"
	},

	{
		name:"Меч",
		price:"11 500 Р",
		img:"img/mech.jpg"
	}
];

var catBlock = document.getElementsByClassName('catalog')[0];//формирую каталог
function catalog() {
	for(var i = 0; i < mass.length; i++){
		var div = document.createElement('div');//блок для товара
		var img = document.createElement('img');//картинка для блока
		var button = document.createElement('div');//кнопка
		div.innerHTML = "<h2>"+mass[i].name+" - "+mass[i].price+"</h2>";//название товара
		img.src = mass[i].img;
		button.innerText = "Купить";
		button.id = i;
		button.className = "btn";
		div.appendChild(img);//добавляю картинку в блок
		div.appendChild(button);//
		catBlock.appendChild(div);//добавляю блок в родителя
	}
}


var BasketBlock = document.getElementsByClassName('basket')[0];

function remove(event){
	var removeId = document.getElementById(event.target.id);
	BasketBlock.removeChild(removeId);
}

function basket(event){
	var div = document.createElement('div');//блок для товара
	var img = document.createElement('img');//картинка для блока
	var button = document.createElement('div');//кнопка
	div.innerHTML = "<h2>"+mass[event.target.id].name+" - "+mass[event.target.id].price+"</h2>";//название товара
	div.id = event.target.id;
	img.src = mass[event.target.id].img;
	button.innerText = "Убрать";

	button.addEventListener('click',remove);//вешаем листенер на кнопку убрать
	button.className = "btnRem";
	button.id = event.target.id;
	div.appendChild(img);//добавляю картинку в блок
	div.appendChild(button);//
	BasketBlock.appendChild(div);//добавляю блок в родителя
}

catalog();
for(var i = 0; i < mass.length; i ++){
	var product = document.getElementsByClassName('btn')[i];
	product.addEventListener('click',basket);
}

