import { Router } from 'express'
import * as MessageController from '@controllers/MessageController'

// TODO: do these pages works inside MessageController
import indexPage from '@views/messages/index'
import createPage from '@views/messages/create'

const router = Router()

// router.get('/', MessageController.index)
router.get('/', indexPage)
// router.get('/create', MessageController.create)
router.get('/create', createPage)
router.post('/', MessageController.store)

module.exports = router
