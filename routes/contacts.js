const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Getting all contacts for logged in user')
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