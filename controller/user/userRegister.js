
const bcrypt = require('bcrypt');
const User = require('../../models/user');
const { registerValidation } = require('./../validation');

const register = async (req, res) => {
    // Validate
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).json({success: false, msg: error.details[0].message});
    const { name, email, password } = req.body;

    // Check if user already exists
    const emailExist = await User.findOne({ email });
    if (emailExist) return res.status(400).json({
        success: false,
        msg: 'Email sudah digunakan'
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    // Create a new user
    const user = await new User({
        name,
        email,
        password: hashedPassword
    });

    try {
        await user.save();
        res.json({ 
            success: true, 
            user_id:user._id
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            msg: err
        });
    }
};

module.exports = register;