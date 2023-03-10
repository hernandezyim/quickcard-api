import { getUserByUsernameAndPass } from '../middlewares/validations/auth.js'
import User from '../models/User.js'
import { createToken } from '../helpers/jwt.js'
import { hashPassword } from '../helpers/bcrypt.js'
import { statusError } from '../helpers/error.js'

export const signUp = async (req, res) => {
  const { body } = req

  if (await User.findOne({ username: body.username })) statusError.conflict()

  body.password = await hashPassword(body.password)

  const { id, name, roles } = await new User(body).save()

  const token = createToken({ id, name, roles })

  res.status(201).send({ id, name, roles, token })
}

export const signIn = async (req, res) => {
  const { body } = req

  const user = await getUserByUsernameAndPass(body)

  if (!user) statusError.unauthorized()

  console.log(user)
  const { id, name, roles } = user
  const token = createToken({ id, name, roles })

  res.send({ id, name, roles, token })
}

export const refreshToken = (req, res) => {
  const { id, name, roles } = req.payload

  const newToken = createToken({ id, name, roles })

  res.send({ id, name, roles, newToken })
}
