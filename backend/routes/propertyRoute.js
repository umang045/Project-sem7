const express = require('express')
const router = express.Router()
const { createProperty } = require('../controller/propertyCntrl')

router.post('/create',createProperty)
module.exports = router
