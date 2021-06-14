

module.exports = (people, age) => {
    let counter = 0;

    people.forEach(person => {
        if (person.age < age) {
            counter++;
            console.log('Ime: ' + person.name + ', prezime: ' + person.lastname)

        }

    })
    console.log(`Pronajdovme ${counter} maloletnici`);
};