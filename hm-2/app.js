let avengers = require('./avengers-data');
let clubs = require('./clubs-data');
let phones = require('./phones-data')

let numbers = [2, 4, 5, 6, 7, 8, 10, 12, 51, 1]

// forEach


avengers.forEach((avenger) => {
    console.log(avenger.name)
});

let sum = 0;
avengers.forEach((avenger) => {
    sum += avenger.age
})

clubs.forEach((club, index) => {
    `${index + 1}. Се печати име на клубот ${club.name}`
});

// filter

let youngerThan55 = avengers.filter((avenger) => {
    if (avenger.age < 55) {
        return avenger.name
    }
});

let lakers = clubs.filter((club) => {
    if (club.name === 'La Lakers') {
        console.log(club)
    }
});

let lessThan6 = numbers.filter((num) => {
    if (num <= 6) {
        return num
    }
});

console.log(lessThan6)

// Map

let doubleNumbers = numbers.map((num) => {
    return num * 2
});


let getFullName = (name) => {
    let fullName = [name.name, name.surname].join(" ");
    console.log(fullName)
};
avengers.map(getFullName);

let samsungModels = phones.map((phone) => {
    if (phone.name === 'Samsung') {
        console.log(phone.model)
    }
});

// find

let redIphone = phones.find((phone) => {
    if (phone.name === "Iphone" && phone.color === "red") {
        console.log(phone)
    }
})

let tenOrTwelve = numbers.find((num) => {
    if (num === 10 || num === 12) {
        console.log(num)
    }
})

let samsungA31 = phones.find((phone) => {
    if (phone.model === 'a31') {
        console.log(phone)
    }
})

// push

numbers.push(100);
console.log(numbers)

let loki = {
    name: 'Loki',
    age: 150
}

avengers.push(loki)
console.log(avengers)
