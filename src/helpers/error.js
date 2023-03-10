import { validationResult } from 'express-validator'

const newError = ({ status, message }) => {
  const err = new Error(message)
  err.status = status
  throw err
}

export const statusError = {
  badRequest: () => newError({ status: 400, message: 'Something went wrong' }),
  unauthorized: () =>
    newError({
      status: 401,
      message: 'Username and/or password incorrect',
    }),
  forbidden: () =>
    newError({
      status: 403,
      message: 'Unauthorized',
    }),
  notFound: () => newError({ status: 404, message: 'Not found' }),
  conflict: () => newError({ status: 409, message: 'The data already exists' }),
  serverError: () =>
    newError({ status: 500, message: 'Internal Server error' }),
}

export const handleErrors = (req, res, next) => {
  const errors = validationResult(req)

  if (errors.isEmpty()) return next()
  console.log(errors)
  res.status(400).send({ errors: errors.mapped() })
}

export const handleHttpError = (err, req, res, next) => {
  const status = err.status || 500
  const message = err.message || 'Something went wrong'
  console.log(status, message)
  res.status(status).json({ message })
}

export const tryCatch = (action) => async (req, res, next) => {
  try {
    await action(req, res, next)
  } catch (err) {
    next(err)
  }
}
