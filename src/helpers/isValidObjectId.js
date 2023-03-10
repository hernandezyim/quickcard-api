import mongoose from 'mongoose'

const isValidObjectId = (value) => {
  if (!mongoose.isValidObjectId(value)) {
    throw new Error('Invalid ObjectId')
  }
  return true
}

export default isValidObjectId
