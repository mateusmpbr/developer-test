import { Router } from 'express'
import * as HelperController from '@controllers/HelperController'

var router = Router()

router.get('/', HelperController.example)

module.exports = router
