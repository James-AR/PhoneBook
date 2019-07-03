const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Getting all contacts for logged in user')
})

router.post('/', (req, res) => {
    res.send('Adding new contact')
})

router.put('/', (req, res) => {
    res.send('Updating contact')
})

router.delete('/', (req, res) => {
    res.send('Deleting contact')
})

module.exports = router