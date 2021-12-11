const bcrypt = require('bcrypt');
const Admin = require('../../models/admin');
const { loginValidation } = require('./../validation');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    // Validate
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const { email, password } = req.body;

    // Check if admin account exists
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).send('Akun tidak ditemukan');

    // Check if password is correct
    const validPass = await bcrypt.compare(password, admin.password);
    if (!validPass) return res.status(400).send('Password salah');

    // Create and assign a token
    const token = jwt.sign({ _id: admin._id}, process.env.ADMIN_TOKEN);
    res.header('auth-token', token).send(token);
    // res.send('Berhasil login');
};

module.exports = login;