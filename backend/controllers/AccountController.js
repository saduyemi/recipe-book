const Account = require('../models/Account')
const bcrypt = require('bcrypt')

module.exports.createaccount_post = async (req, res) => {
    const {username, email, password} = req.body;

    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(password, salt);

    console.log(hashed);
    let accnt = new Account({username, email, password: hashed});
    
    try {
        let result = await accnt.save();
        res.status(201).json({message: `${username} created!`});
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}

module.exports.findaccount_post = async (req, res) =>  {
    try {
        let user = await Account.findOne({email: req.body.email});
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}