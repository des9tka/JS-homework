//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль.
let mass = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
for (let i = 0; i != mass.length; i++) {
    console.log(mass[i])
};

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: "Percy Jackson",
    pageCount: 416,
    genre: "Fantasy"
};

let book2 = {
    title: "Alice’s Adventures in Wonderland",
    pageCount: 240,
    genre: "Fantasy"
};

let book3 = {
    title: "The Fellowship of the Ring",
    pageCount: "423",
    genre: "Adventure"
};

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age.
let book_1 = {
    title: "Harry Potter and the Philosopher's Stone",
    pageCount: 223,
    genre: "Fantasy",
    author: {
        name: "Joanne Rowling",
        age: 66
    }
};

let book_2 = {
    title: "Lord of the Flies",
    pageCount: 224,
    genre: "Novel",
    author: {
        name: "William Gerald Golding",
        age: 81
    }
};

let book_3 = {
    title: "The Fellowship of the Ring",
    pageCount: 384,
    genre: "Romance novel",
    author: {
        name: "Colleen Hoover",
        age: 43
    }
};

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача.
let users = [
    user1 = {
        name: "Leanne Graham",
        username: "Bret",
        password: 12451254
    },
    user2 = {
        name: "Ervin Howell",
        username: "Antonette",
        password: 769868646
    },
    user3 = {
        name: "Clementine Bauch",
        username: "Samantha",
        password: 123466542
    },
    user4 = {
        name: "Patricia Lebsack",
        username: "Karianne",
        password: 107534547
    },
    user5 = {
        name: "Chelsey Dietrich",
        username: "Kamren",
        password: 53677563
    },
    user6 = {
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        password: 98706534
    },
    user7 = {
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        password: 2344365433
    },
    user8 = {
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        password: 178643433
    },
    user9 = {
        name: "Glenna Reichert",
        username: "Delphine",
        password: 1254636
    },
    user10 = {
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        password: 1353756831
    }
];

 for (let n = 0; n != users.length; n++) {
     console.log(users[n].password)
 };


