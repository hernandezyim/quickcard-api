import { body, param } from 'express-validator'
import { handleErrors } from '../../helpers/error.js'
import isValidObjectId from '../../helpers/isValidObjectId.js'

export const validateProducId = [
  param('id').exists().custom(isValidObjectId),
  handleErrors,
]

export const validateProduct = [
  body('name').exists(),
  body('quantity').exists(),
  body('price').exists(),
  handleErrors,
]
