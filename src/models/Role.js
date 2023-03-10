import mongoose from 'mongoose'

const { Schema, model } = mongoose

const roleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: String,
  },
  {
    versionKey: false,
  }
)

export default model('role', roleSchema)
