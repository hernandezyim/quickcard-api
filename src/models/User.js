import mongoose from 'mongoose'

const { Schema, model } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    roles: [
      {
        type: Schema.Types.ObjectId,
        ref: 'role',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('user', userSchema)
