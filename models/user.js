const mongo = require('mongoose')
const schema = mongo.Schema;

const userSchema = new schema({
    name: String,
    password: String,
    email: {
        unique: true,
        type: String
    }
})

const User = mongo.model('User', userSchema)

module.exports = User