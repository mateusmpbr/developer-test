import { Router } from 'express'
import * as MessageController from '@controllers/MessageController'

const router = Router()

router.get('/messages', MessageController.index)
router.get('/messages/create', MessageController.create)
router.post('/messages', MessageController.store)

export { router }
