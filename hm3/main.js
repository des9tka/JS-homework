//- Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 32;
if (x !== 0) {
    console.log("Correct");
} else {
    console.log("Incorrect");
}
console.log(" ");

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число(в першу, другу, третю или четверту частину години).
let time = Math.random() * 59;
time = Math.ceil(time);

if (14 >= time && time >= 0) {
    console.log("First quoter");
} else if (29 >= time && time >= 15) {
    console.log("Second quoter");
} else if (44 >= time && time >= 30) {
    console.log("Third quoter");
} else if (59 >= time && time >= 45) {
    console.log("Forth quoter");
} else {
    console.log("Wrong operation")
}
console.log(" ");

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = Math.random() * 31;
day = Math.ceil(day);

if (10 >= day && day >= 1) {
    console.log("First decade");
} else if (20 >= day && day >= 11) {
    console.log("Second decade");
} else if (31 >= day && day >= 21){
    console.log("Third decade");
} else {
    console.log("Wrong operation");
}
console.log(" ");

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let numDay = +prompt("Input day number:")
switch (numDay) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Wrong operation");
}
console.log(" ");

//- Користувач вводить або має два числа.
//Потрібно знайти та вивести максимальне число з тих двох .
//Також потрібно врахувати коли введені рівні числа.
let choice1 = +prompt("Input first int:");
let choice2 = +prompt("Input second int:");
n1 = Number.isInteger(choice1);
n2 = Number.isInteger(choice2);

if (choice1 > choice2 && n1 === true && n2 === true) {
    console.log(choice1);
} else if (choice2 > choice1 && n2 === true && n1 === true) {
    console.log(choice2);
} else if (choice1 === choice2 && n2 === true && n1 === true) {
    console.log(choice1);
} else {
    console.log("Not int");
}
console.log(" ");

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який, за допомоги  оператора || буде присвоювати змінній х
// значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let y = prompt("Smth:");
//let falsy = [NaN, "", 0, undefined, null]

if (y === NaN || y === 0 || y === null || y === "" || y === undefined) {
    y = "default"
    console.log(y);
} else {
    console.log(y);
}