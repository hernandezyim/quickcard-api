import { Router } from 'express'
import { getRoles } from '../controllers/role.js'
import { tryCatch } from '../helpers/error.js'
import { checkTokenAuth } from '../middlewares/auth.js'

const router = Router()

router.get('/', checkTokenAuth, tryCatch(getRoles))

export default router
