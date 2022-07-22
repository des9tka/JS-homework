/////'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false

let grit = "hello";
let title = "owu";
let domen = "com";
let count = "ua";

let n1 = 1;
let n2 = 10;
let n3 = -999;
let n4 = 123;
let n5 = 3.14;
let n6 = 2.7;

let btrue = true;
let bfalse = false;

let mass = [grit, title, domen, count, n1, n2, n3, n4, n5, n6, btrue, bfalse];
let SPACE = " ";

for (let n = 0; n != 12; n++) {
    console.log(mass[n])
    alert(mass[n])
    document.write(mass[n] + SPACE)
};

let firstName = "Vlad";
let middleName = "Sergiyovich";
let lastName = "Desyatnik";

let person = `${firstName} ${middleName} ${lastName}`;
console.log(person);

let a = 100;
let b = "100";
let c = true;

console.log(typeof (a), typeof (b), typeof (c));

let p1 = prompt("Input your first name:");
let p2 = prompt("Input your middle name:");
let p3 = prompt("Input your age:");

console.log(`${p1} ${p2} ${p3}`);