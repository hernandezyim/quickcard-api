import { Router } from 'express'

import auth from './auth.js'
import order from './order.js'
import product from './product.js'
import role from './role.js'

const router = Router()

router.use('/auth', auth)
router.use('/order', order)
router.use('/product', product)
router.use('/role', role)

export default router
