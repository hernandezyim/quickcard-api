import { body, param } from 'express-validator'

import { handleErrors } from '../../helpers/error.js'
import isValidObjectId from '../../helpers/isValidObjectId.js'

export const validateOrder = [
  body('items').exists().isArray(),
  body('uid').exists(),
  handleErrors,
]
export const validateOrderId = [
  param('id').exists().custom(isValidObjectId),
  handleErrors,
]
