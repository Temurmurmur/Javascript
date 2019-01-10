
var block = document.getElementById("wrapper");
var color,color2,swi = 65,swj = 1;


function create() {
for(var i = 0; i < 10; i++){
	if(i%2){
		color = "blackCell";
		color2 = "whiteCell";
	}
	else{
		color = "whiteCell";
		color2 = "blackCell";
	}
	for(var j = 0; j < 10; j++){//2for
		var div = document.createElement("div");
		if(i==0 || j==0 || j == 9 || i==9){
			div.className = "border";
			switch(i){
				case 0:
					if(j!=0 && j!=9){
						div.style.transform = "rotate(180deg)";
						div.innerHTML = "&#"+swi;
						swi++;
					}
				break;
				case 9:
					if(swi > 72){swi = 65;}
					if(j!=0 && j!=9){
						div.innerHTML = "&#"+swi;
						swi++;
					}
				break;
			}

			switch(j){
				case 0:
					if(i!=0 && i!=9){
						div.style.transform = "rotate(180deg)";
						div.innerText = swj;
					}
				break;
				case 9:
					if(swj > 8){swj = 1;}
					if(i!=0 && i!=9){
						div.innerText = swj;
						swj++;
					}
				break;
			}
		}
		else{
			if(j%2){
				div.className = color;
				
			}
			else{
				div.className = color2;
			}
		}
		block.appendChild(div);
	}
}
}

function pawns(){
	for(var i = 1;i <= 8; i++ ){
		block.children[70+i].innerHTML = "&#9817";
	}

	for(var i = 1;i <= 8; i++ ){
		block.children[20+i].innerHTML = "&#9823";
		block.children[20+i].style.transform = "rotate(180deg)";
	}
}

function figures(){
	//Ладьи
	block.children[11].innerHTML = "&#9820";
	block.children[18].innerHTML = "&#9820";

	block.children[81].innerHTML = "&#9814";
	block.children[88].innerHTML = "&#9814";
	//Кони
	block.children[12].innerHTML = "&#9822";
	block.children[17].innerHTML = "&#9822";

	block.children[82].innerHTML = "&#9816";
	block.children[87].innerHTML = "&#9816";
	//Слоны
	block.children[13].innerHTML = "&#9821";
	block.children[16].innerHTML = "&#9821";

	block.children[83].innerHTML = "&#9815";
	block.children[86].innerHTML = "&#9815";
	//Ферзи
	block.children[15].innerHTML = "&#9819";
	block.children[85].innerHTML = "&#9813";
	//Короли
	block.children[14].innerHTML = "&#9818";
	block.children[84].innerHTML = "&#9812";

	for(var i = 1; i <=8; i++){
		block.children[10+i].style.transform = "rotate(180deg)";
	}
}



create();
pawns();
figures();

