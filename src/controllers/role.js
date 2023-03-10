import Role from '../models/Role.js'

export const getRoles = async (req, res) => {
  const roles = await Role.find()

  res.json({
    roles,
  })
}
