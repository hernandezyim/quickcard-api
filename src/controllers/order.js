import { statusError } from '../helpers/error.js'
import { calculateOrderTotal } from '../helpers/orders.js'
import paginate from '../helpers/paginate.js'
import Order from '../models/Order.js'

export const getOrdersAll = async (req, res) => {
  const { query } = req
  const { limit, offset } = paginate(query)

  const orders = await Order.find()
    .populate('items.product', { createdAt: 0, updatedAt: 0 })
    .populate('uid', 'name')
    .limit(limit)
    .skip(offset)

  res.send({ orders })
}

export const getOrders = async (req, res) => {
  const { payload, query } = req
  const { limit, offset } = paginate(query)

  const orders = await Order.find({ uid: payload.id })
    .populate('items.product', 'name')
    .populate('uid', 'name')
    .limit(limit)
    .skip(offset)

  res.send({ orders })
}

export const getOrderById = async (req, res) => {
  const { params, payload } = req

  const orders = await Order.findOne({
    uid: payload.id,
    _id: params.id,
  }).populate('items.product', {
    quantity: 0,
    price: 0,
    createdAt: 0,
    updatedAt: 0,
  })

  if (!orders) statusError.notFound()

  res.send({ orders })
}

export const postOrder = async (req, res) => {
  const { body, payload } = req
  body.uid = payload.id

  const total = await calculateOrderTotal(body.items)

  body.total = total

  const order = await new Order(body).save()

  res.status(201).send({ order })
}

export const updateOrder = async (req, res) => {
  const { body, params } = req

  if (!(await Order.findById(params.id))) statusError.notFound()

  const total = await calculateOrderTotal(body.items)

  body.total = total

  await Order.findByIdAndUpdate(params.id, body)

  res.status(204).end()
}

export const deleteOrder = async (req, res) => {
  const { id } = req.params

  if (!(await Order.findById(id))) statusError.notFound()

  await Order.findByIdAndDelete(id)

  res.status(204).end()
}
