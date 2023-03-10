import { Router } from 'express'
import {
  deleteProduct,
  getProductById,
  getProducts,
  postProduct,
  updateProduct,
} from '../controllers/product.js'
import { tryCatch } from '../helpers/error.js'

import { checkRoleAuth, checkTokenAuth } from '../middlewares/auth.js'
import {
  validateProducId,
  validateProduct,
} from '../middlewares/validations/product.js'

const router = Router()

router.use(tryCatch(checkTokenAuth))

router.get('/', tryCatch(getProducts))
router.use(tryCatch(checkRoleAuth(['admin', 'mod'])))

router.get('/:id', validateProducId, tryCatch(getProductById))

router.post('/', validateProduct, tryCatch(postProduct))

router.put('/:id', validateProduct, validateProducId, tryCatch(updateProduct))

router.delete('/:id', validateProducId, tryCatch(deleteProduct))

export default router
