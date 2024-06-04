const users = [
    {
        id: 1,
        name: 'Ezequiel'
    },
    {
        id: 2,
        name: 'Isa'
    }
]

function getUserById( id, callback ) {
    const user = users.find( function(user) {
        return user.id === id
    });
    if (!user) {
        return callback(`USUARIO NO ENCONTRADO ${id}`)
    }

    return callback(null, user)
}

module.exports = {
    getUserById
}