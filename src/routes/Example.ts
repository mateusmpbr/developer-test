import examplePage from '@views/example'
var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', examplePage)

module.exports = router
