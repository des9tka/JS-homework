////- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//function sSquare(a, b) {
//    let sSquare = a * b
//    return sSquare
//}

////- створити функцію яка обчислює та повертає площу кола з радіусом r
//function sCircle(r) {
//    sCircle = Math.pow((Math.PI * r), 2)
//    return sCircle
//}

////- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//function sCil (h, r) {
//  let sCil = 2 *(Math.PI * r * (h + r))
//  return sCil
//}

////- створити функцію яка приймає масив та виводить кожен його елемент
//function showItem(array) {
//    for (const arrayElement of array) {
//        console.log(arrayElement);
//    }
//}

////- створити функцію яка створює параграф з текстом. Текст задати через аргумент
//let addPar = (text) => document.write(`<p>${text}</p>`)

////- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//let addUl = (text) => document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`)

////- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут
//// використовувати цикл)
//function addUl2(liText, liN) {
//    for (let i = 0; i !== liN; i++) {
//        document.write(`<ul><li>${liText}</li></ul>`);
//    }
//}

////- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//let mass1 = [true, 1, "a", false, NaN, 2, "ab", 3, "abc"];
//
//function massFilt (mass) {
//  for (const mas of mass) {
//      document.write(`<ul><li>${mas}</li></ul>`)
//    }
//}
//
//massFilt(mass1)

////- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//let info = [
//  {
//    id: 1,
//    name: "Leanne Graham",
//      age: 23
//  },
//  {
//    id: 2,
//    name: "Ervin Howell",
//    age: 24
//  },
//  {
//    id: 3,
//    name: "Clementine Bauch",
//    age: 25
//  },
//  {
//    id: 4,
//    name: "Patricia Lebsack",
//    age: 26
//  },
//  {
//    id: 5,
//    name: "Chelsey Dietrich",
//    age: 27
//  },
//]
//
//function nDiv(mass) {
//  for (const mas of mass) {
//    document.write(`<div>${mas.id}---${mas.name}---${mas.age}</div>`)
//  }
//}
//
//nDiv(info)

////- створити функцію яка повертає найменьше число з масиву
//function theLeastN (mass) {
//    let maxN = mass[0]
//    for (const item_mass of mass) {
//        if (item_mass > maxN) {
//            maxN = item_mass;
//        }
//    }
//    return maxN;
//}

////- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//function sumNMass (mass) {
//    let sumN = 0;
//    for (const elements of mass) {
//        sumN += elements;
//        console.log(elements);
//    }
//    return sumN;
//}