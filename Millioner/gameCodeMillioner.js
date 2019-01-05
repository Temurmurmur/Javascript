console.log(massObjects);
var event, ok , endgame = false,myMoney = 0;
for(var i = 0; i < massObjects.length;i++){
    if(endgame == false){
    do {
        ok = false;
        event = +prompt(massObjects[i].text + massObjects[i].a1 + massObjects[i].a2 + massObjects[i].a3 + massObjects[i].a4 + 'Выигранная сумма - ' + myMoney +'\n-1 - Выход из игры');
        if (event == -1) {
            break;
        }
        else {
            ok = isAnswer(i, event);
            myMoney += massObjects[i].summa;
        }

        if (massObjects[i].correct != event && ok == true){
            alert('Ответ не верен , вы проиграли!');
            endgame = true;
            break;
            
        }
    } while (!ok);
    }
    else{
        break;
    }
}

if(endgame == false){
    alert("Поздравляю , Вы выиграли!!!\n Ваш выигрыш составил - "+myMoney);
}

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > 4) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }

 return true;
    
}
// var event, ok;

// do {//Выводим первый вопрос
//     ok = false;
//     event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
//     if (event == -1) {
//         break;
//     }
//     else {
//         ok = isAnswer(works.a0, event);
//     }
// } while (!ok);
// switch (event) {//x1
//     case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
//         do {
//             ok = false;
//             event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
//             if (event == -1) {
//                 break;
//             }
//             else {
//                 ok = isAnswer(works.b0, event);
//             }
//         } while (!ok);
//         switch (event) {
//             case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
//                 do {
//                     ok = false;
//                     event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
//                     if (event == -1) {
//                         break;
//                     }
//                     else {
//                         ok = isAnswer(works.d0, event);
//                     }
//                 } while (!ok);

//                 break;
//             case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
//                 do {
//                     ok = false;
//                     event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
//                     if (event == -1) {
//                         break;
//                     }
//                     else {
//                         ok = isAnswer(works.d0, event);
//                     }
//                 } while (!ok);

//                 break;
//             case -1: // Второе действие
//                 break;
//             default:
//                 alert('Ошибка');
//         }
//         break;
//     case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
//         do {
//             ok = false;
//             event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
//             if (event == -1) {
//                 break;
//             }
//             else {
//                 ok = isAnswer(works.c0, event);
//             }
//         } while (!ok);
//         switch (event) {
//             case 1: // Второе действие
//                 do {
//                     ok = false;
//                     event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
//                     if (event == -1) {
//                         break;
//                     }
//                     else {
//                         ok = isAnswer(works.d0, event);
//                     }
//                 } while (!ok);

//                 break;
//             case 2: // Второе действие
//                 do {
//                     ok = false;
//                     event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
//                     if (event == -1) {
//                         break;
//                     }
//                     else {
//                         ok = isAnswer(works.d0, event);
//                     }
//                 } while (!ok);

//                 break;
//             case -1: // Второе действие
//                 break;
//             default:
//                 alert('Ошибка');
//         }
//         break;
//     case -1: // Первое действие
//         break;
//     default:
//         alert('Ошибка');
// }
// alert('Спасибо за игру');

// var select = Number(prompt("Выберете номер вопроса - "));
// switch(select){
//     case 1:
//         alert(works.a00);
//     break;
//     case 2:
//         alert(works.b00);
//     break;
//     case 3:
//         alert(works.c00);
//     break;
//     default:
//         alert('Error');
// }

// //------------------------------------------
// function isAnswer(q, event) {
//     if (isNaN(event) || !isFinite(event)) {
//         alert('Вы ввели недопустимый символ');
//         return false;
//     }
//     else if (event < 1 || event > q) {
//         alert('Ваше число выходит из допустимого диапозона');
//         return false;
//     }
// 	return true;
    
// }