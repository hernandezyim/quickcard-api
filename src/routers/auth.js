import { Router } from 'express'

import { tryCatch } from '../helpers/error.js'
import { signUp, signIn, refreshToken } from '../controllers/auth.js'
import { checkTokenAuth } from '../middlewares/auth.js'
import { validateSignIn } from '../middlewares/validations/auth.js'
import { validateUser } from '../middlewares/validations/user.js'

const router = Router()

// Sign up route
router.post('/sign_up', validateUser, tryCatch(signUp))

// Sign in route
router.post('/sign_in', validateSignIn, tryCatch(signIn))

// Refresh token route
router.get('/', tryCatch(checkTokenAuth), tryCatch(refreshToken))

export default router
