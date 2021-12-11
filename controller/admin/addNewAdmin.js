const bcrypt = require('bcrypt');
const Admin = require('../../models/admin');
const { registerValidation } = require('../validation');

const addNewAdmin = async (req, res) => {
    // Validate
    const { error } = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    
    const { name, email, password } = req.body;

    // Check if user already exists
    const emailExist = await Admin.findOne({ email });
    if (emailExist) return res.status(400).send('Email already exists');

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        // Create a new admin account
        const admin = new Admin({
            name,
            email,
            password: hashedPassword
        });
        
        await admin.save();
        res.send({ admin_id:admin._id, created: true});
    } catch (err) {
        res.status(400).send(err);
    }
};

module.exports = addNewAdmin;