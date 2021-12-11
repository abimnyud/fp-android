const express = require('express');
const router = express.Router();
const { verifyAdmin } = require('../controller/verifyToken')

// Login admin
const login = require('../controller/admin/adminLogin');
router.post('/admin/login', login);

// Register new admin
const add = require('../controller/admin/addNewAdmin');
router.post('/admin/add', verifyAdmin, add);

// Delete admin
const deleteAdmin = require('../controller/admin/deleteAdmin');
router.delete('/admin/delete/:id', verifyAdmin, deleteAdmin);

// Register New User
const userRegister = require('../controller/user/userRegister');
router.post('/register', userRegister);

// Login User
const userLogin = require('../controller/user/userLogin');
router.post('/login', userLogin);

module.exports = router;