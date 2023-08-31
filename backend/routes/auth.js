const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleW/fetchUser');
const JWT_SECRET = 'jsonwebtoken';


// ROUTE 1: Creating a User and geting username, password and email.
router.post('/createUser', [
    body('name', 'Enter a valid name').isLength({ min: 6 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password').isLength({ min: 6 })
], async (req, res) => {
    let success = false;


    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ success, error: "This email already exists" })
        }

        const salt = await bcrypt.genSaltSync(10);
        const securePass = await bcrypt.hash(req.body.password, salt)

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePass
        })

        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({ success, authtoken });
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured")
    }
})
// ROUTE 2: Authenticating a user
router.post('/loginUser', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success, error: "Please login with correct credentials" });
            success=false;
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({ success, authtoken });


    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occured")
    }
})
// ROUTE 3: Getting already logged in user info.
// ROUTE 3: Getting already logged in user info.
router.post('/getUser', fetchUser, async (req, res) => {

    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error Occurred");
    }
});

module.exports = router
