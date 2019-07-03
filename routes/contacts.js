const express = require('express')
const router = express.Router()
const auth = require('../middleware/auth')
const Contact = require('../models/Contact')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')

router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user:req.user.id }).sort({ date:-1 })
        res.json(contacts)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server error')
    } 
})

router.post('/', (req, res) => {
    res.send('Adding new contact')
})

router.put('/:id', (req, res) => {
    res.send('Updating contact')
})

router.delete('/:id', (req, res) => {
    res.send('Deleting contact')
})

module.exports = router