
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const { loginValidation } = require('./../validation');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    // Validate
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).json({success: false, msg: error.details[0].message});
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({
        success: false,
        msg: 'Akun tidak ditemukan'
    });

    // Check if password is correct
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).json({
        succes: false,
        msg: 'Password salah'
    });

    // Create and assign a token
    const token = jwt.sign({ _id: user._id}, process.env.USER_TOKEN);
    res.header('auth-token', token).json({
        success: true,
        'auth-token': `${token}`
    });
};

module.exports = login;