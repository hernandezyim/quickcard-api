import Product from '../models/Product.js'

export const calculateOrderTotal = async (items) => {
  const productsIds = items.map(({ product }) => product._id)

  const _products = await Product.find({ _id: { $in: productsIds } })

  const total = items.reduce((total, { product, quantity }) => {
    const { price } = _products.find(({ id }) => id === product._id)

    return price * quantity + total
  }, 0)

  return total
}
