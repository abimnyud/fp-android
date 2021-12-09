const express = require('express');
const router = express.Router();

// Register New Admin
const register = require('../controller/admin/adminRegister');
router.post('/admin/register', register);

// Login Admin
const login = require('../controller/admin/adminLogin');
router.post('/admin/login', login);

// Register New User
const userRegister = require('../controller/user/userRegister');
router.post('/register', userRegister);

// Login User
const userLogin = require('../controller/user/userLogin');
router.post('/login', userLogin);

module.exports = router;