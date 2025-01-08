const Account = require('../models/Account')
const bcrypt = require('bcrypt')

module.exports.createaccount_post = async (req, res) => {
    const {username, email, password} = req.body;

    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(password, salt);

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

        if (!user) {
            return res.status(404).json({error_message: "Error: User Not Found"});
        }

        let isValid = await bcrypt.compare(req.body.password, user.password);
        if (isValid) {
            res.status(200).json(user);
        } else {
            res.status(400).json({error_message: "Error: Incorrect Password"});
        }
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}