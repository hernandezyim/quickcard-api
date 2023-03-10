import mongoose from 'mongoose'

const { Schema, model } = mongoose

const orderSchema = new Schema(
  {
    items: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: 'product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
      },
    ],
    total: {
      type: Number,
    },
    uid: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

export default model('order', orderSchema)
