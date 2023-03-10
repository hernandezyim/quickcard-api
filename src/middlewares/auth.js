import { verifyToken } from '../helpers/jwt.js'
import { statusError } from '../helpers/error.js'
import Role from '../models/Role.js'

export const checkTokenAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ').pop()

  const payload = verifyToken(token)

  if (!payload) statusError.forbidden()

  req.payload = payload

  next()
}

export const checkRoleAuth = (rolesAdmitted) => async (req, res, next) => {
  const { roles } = req.payload

  const rolesAdmittedIDs = (
    await Role.find({ name: { $in: rolesAdmitted } })
  ).map((role) => role._id.toString())

  if (!roles.some((rol) => rolesAdmittedIDs.includes(rol._id)))
    statusError.forbidden()

  next()
}
