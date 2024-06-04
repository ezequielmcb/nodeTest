
// interface IPerson {
//     name: string
//     age?: number
//     birthday: string
// }
const { getAge, getUUID } = require('../plugins')


buildMakePerson = ({ getUUID, getAge}) => {
    return ({ name, birthday} ) => {
        return {
            id: getUUID(),
            name: name,
            birthday: birthday,
            age: getAge(birthday),
        }
    }
}

// const ojt = {name: "Oscar", birthday: "01/24/2001"}

// const john = buildPerson(ojt)

// console.log(john)

module.exports = {
    buildMakePerson
}