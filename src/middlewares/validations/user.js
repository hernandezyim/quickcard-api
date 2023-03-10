import { body, param } from 'express-validator'

import { handleErrors } from '../../helpers/error.js'
import isValidObjectId from '../../helpers/isValidObjectId.js'

export const validateUser = [
  body('name').exists().isLength({ min: 4 }),
  body('username').isLength({ min: 4 }).exists(),
  body('email').exists().isEmail(),
  body('password').exists().isLength({ min: 6 }),
  handleErrors,
]
export const validateUserId = [
  param('id').exists().custom(isValidObjectId),
  handleErrors,
]
