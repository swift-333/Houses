"use strict";

let Tc = prompt('ведите чистло');
let Tf = (9 / 5) * Tc + 32;
alert(Tf)

let admin, name;
name = "Василий";
admin = name;
alert( admin );



console.log(10 + 10 + "10");
console.log(10+"10"+10);
console.log(10 +10+ +"10");
console.log(10/"");
console.log(10/+"2,5");

var a = prompt("Введите шестизначный номер билета:");
if(isNaN(a) || a < 100000 || a > 999999){
    alert("Введено недопустимое значение цифр номера билета");
}
else{
    if(+a[0] + +a[1] == +a[2] + +a[3])
        alert("У вас счастливый билет!");
    else
        alert("У вас обычный билет!");
}