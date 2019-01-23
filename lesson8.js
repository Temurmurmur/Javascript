// из 7 урока замыкание можно применить для счетчика очков и увеличения звеньев змейки

if (!("a" in window)){ // при загрузке а уже создана
    var a = 1;
}
alert(a);// выведет 1 

var b = function a(x) {
    x && a(--x);
};
alert(a);//ничего не выведет

function a(x) {
    return x * 2;
}
var a;
alert(a);//выведет ошибку т.к а = a(); не выполнено

function b(x, y, a) {
    arguments[2] = 10;//аргументу под номером 2 присваивается 10 , нумерация аргументов функции начинается с 0
    alert(a);
}
b(1, 2, 3);// выведет 10

function a() {
    alert(this);
}
a.call(null);//вывелеи объект window т.к используется es6