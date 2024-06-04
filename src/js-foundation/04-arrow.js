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

const getUserById = ( id, callback ) => {
    const user = users.find((user) => user.id === id);
    
    if (!user) {
        return callback(`USUARIO NO ENCONTRADO ${id}`)
    }

    return callback(null, user)
}

module.exports = {
    getUserById
}