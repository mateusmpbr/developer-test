import indexPage from '@views/index'
var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', indexPage)

module.exports = router
