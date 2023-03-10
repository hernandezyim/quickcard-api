import mongoose from 'mongoose'

const { Schema, model } = mongoose

const productSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('product', productSchema)
