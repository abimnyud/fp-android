
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const { registerValidation } = require('./../validation');

const register = async (req, res) => {
    // Validate
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const { name, email, password } = req.body;

    // Check if user already exists
    const emailExist = await User.findOne({ email });
    if (emailExist) return res.status(400).send('Email already exists');

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    // Create a new user
    const user = new User({
        name,
        email,
        password: hashedPassword
    });

    try {
        await user.save();
        res.send({ user_id:user._id, created: true});
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = register;