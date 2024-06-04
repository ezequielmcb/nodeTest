const { v4: uuidV4 } = require('uuid');


getUUID = () => {
    return uuidV4()
}

module.exports = {
    getUUID
}