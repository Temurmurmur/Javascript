var srcPhoto = ['"littlePhoto/0.jpg"','"littlePhoto/1.jpg"','"littlePhoto/2.jpg"'];
var srcPhotoBig = ['"bigPhoto/0.jpg"','"bigPhoto/1.jpg"'];

var litPhBlock = document.getElementsByClassName("littlePhotoWrap")[0];
var left = document.getElementsByClassName("left")[0];
var right = document.getElementsByClassName("right")[0];
var bigPhBlock = document.getElementsByClassName("bigPhoto")[0];
var div,slide,current = 0;

function zoom(event) {
	image = '<img src='+srcPhotoBig[event.target.id]+'>';
	for(var i = 0; i < srcPhoto.length;i++ ){
		var hide = document.getElementById(i);
			hide.style.opacity = "100";

	}
	bigPhBlock.innerHTML = image;
	
	
}

function slide(event) {
	if(event.target.className == 'left'){
		current--;
		if(current < 0){
			current = srcPhoto.length-1;
		}
	}
	else if (event.target.className == 'right'){
		current++;
		if(current > srcPhoto.length-1){
			current = 0;
		}
	}
	for(var i = 0; i < srcPhoto.length;i++ ){
		var hide = document.getElementById(i);
		if(current == i){
			hide.style.opacity = "100";
			continue;
		}
		
		hide.style.opacity = "0.25";
	}
	bigPhBlock.innerHTML = '<img src='+srcPhotoBig[current]+'>';
}


for(var i = 0; i < srcPhoto.length; i++){
	div = document.createElement('div');
	div.innerHTML = '<img src='+srcPhoto[i]+'id="'+i+'">';
	div.addEventListener('error',function(event) {alert("asd");});
	litPhBlock.appendChild(div);
	
}

litPhBlock.addEventListener('click',zoom);
left.addEventListener('click',slide);
right.addEventListener('click',slide);

