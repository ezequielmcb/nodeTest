// const { getUserById } = require('./js-foundation/03-callbacks')

// const id = 1

// getUserById(id, function(error, user) {
    //     if (error) {
        //         throw new Error(error)
        //     }
        //     // getUserById(2, function(error, user2) {
            //     //     if (error) {
//     //         throw new Error(error)
//     //     }
//     // })
//     console.log(user)
// })

// ! Referencia a la function factory

// const { buildMakePerson } = require('./js-foundation/05-factory')
// const { getUUID, getAge } = require('./plugins')

// const ojt = {name: "John", birthday: "01/24/2001"}

// const makePerson = buildMakePerson({ getUUID, getAge})

// const john = makePerson(ojt)

// console.log(john)



const { getPokemonById } = require('./js-foundation/06-promises')


getPokemonById(5)
    .then((pokemon) => console.log(pokemon))
    .catch(() => console.log('Please again'))
    .finally(() => console.log('Finally'))

