// data schema for an account
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const accountSchema = new Schema({
    username : {
        type: String,
        unique: true,
        required: true
    },
    email : {
        type: String, 
        required: true
    },
    password : {
        type: String, 
        required: true
    },
}, {collection: 'Accounts'});

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;