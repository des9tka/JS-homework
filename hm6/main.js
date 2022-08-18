//- Знайти та вивести довижину настипних стрінгових значень 'hello world', 'lorem ipsum', 'javascript is cool'
//let strs = ['hello world', 'lorem ipsum', 'javascript is cool'];
//for (const str of strs) {
//    console.log(str.length);
//}

//- Перевести до великого регістру наступні стрінгові значення 'hello world', 'lorem ipsum', 'javascript is cool'
//for (const str of strs) {
//    console.log(str.toUpperCase());
//}

//- Перевести до нижнього регістру настипні стрінгові значення 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
//let upStrs = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
//for (const upStr of upStrs) {
//    console.log(upStr.toLowerCase());
//}

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//let str = ' dirty string   ';
//let nStr = str.trim();


//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//let str = 'Ревуть воли як ясла повні';
//function stringToarray(str) {
//    let mStr = str.split(" ");
//    return mStr
//}

//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//let n = [10,8,-7,55,987,-1011,0,1050,0];
//let nMap = n.map(num => String(num))

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]
//function sortNums(mass, direction) {
//    if (direction === "ascending") {
//        mass.sort((a, b) => a - b);
//    } else if (direction === "descending") {
//        mass.sort((a, b) => b - a);
//    }
//    return mass;
//}

//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//-- відсортувати його за спаданням за monthDuration
//let filtCourse = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//let sortCourse = coursesAndDurationArray.filter(value => value.monthDuration > 5);


//описати колоду карт
//- знайти піковий туз
//- всі шістки
//- всі червоні карти
//- всі буби
//- всі трефи від 9 та більше
//
//
//
//Додатково по reduce
//Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
//{
//    spades:[],
//        diamonds:[],
//    hearts:[],
//    clubs:[]
//}
