import { Router } from 'express'
import { tryCatch } from '../helpers/error.js'
import {
  deleteOrder,
  getOrders,
  getOrdersAll,
  postOrder,
  updateOrder,
} from '../controllers/order.js'
import { checkRoleAuth, checkTokenAuth } from '../middlewares/auth.js'
import {
  validateOrder,
  validateOrderId,
} from '../middlewares/validations/order.js'

const router = Router()

router.use(tryCatch(checkTokenAuth))

router.get('/', tryCatch(getOrders))

router.post('/', validateOrder, tryCatch(postOrder))

router.get('/all', checkRoleAuth(['admin']), tryCatch(getOrdersAll))

router.put(
  '/:id',
  checkRoleAuth(['admin', 'mod']),
  validateOrder,
  validateOrderId,
  tryCatch(updateOrder)
)

router.delete(
  '/:id',
  checkRoleAuth(['admin']),
  validateOrderId,
  tryCatch(deleteOrder)
)

export default router
