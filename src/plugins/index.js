const { getAge } = require('../plugins/get-age.plugin')
const { getUUID } = require('../plugins/get-id-plugin') 
const { http } = require('../plugins/htto-clientplugin') 

module.exports = {
    getAge,
    getUUID,
    http
} 