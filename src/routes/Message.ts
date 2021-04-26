import { Router } from 'express'
import * as MessageController from '@controllers/MessageController'

const router = Router()

router.get('/', MessageController.index)
router.get('/json', MessageController.indexJson)
router.get('/create', MessageController.create)
router.post('/', MessageController.store)

module.exports = router
