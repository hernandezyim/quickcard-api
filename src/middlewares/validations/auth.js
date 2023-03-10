import { body } from 'express-validator'
import { isValidPassword } from '../../helpers/bcrypt.js'
import { handleErrors } from '../../helpers/error.js'
import User from '../../models/User.js'

export const validateSignIn = [
  body('username').isLength({ min: 4 }).exists(),
  body('password').exists().isLength({ min: 6 }).exists(),
  handleErrors,
]

export const getUserByUsernameAndPass = async ({ username, password }) => {
  const user = await User.findOne({ username }).populate('roles')

  if (user && (await isValidPassword(password, user.password))) return user
}
