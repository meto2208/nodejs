const faker = require('faker')

let users = [];

for (let i = 1; i <= 20; i++) {
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let dateOfBirth = faker.date.past()
    let transNumber = faker.finance.account();
    let balance = faker.finance.amount();

    let address = faker.address.streetAddress();

    users.push({
        "FirstName": firstName,
        "LastName": lastName,
        "DOB": dateOfBirth,
        "TransNum": transNumber,
        "Balance": balance,
        "StreetAddress": address,
    })
}

console.log(users)