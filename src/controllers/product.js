import mongoose from 'mongoose'
import { statusError } from '../helpers/error.js'
import Product from '../models/Product.js'

export const getProducts = async (req, res) => {
  const products = await Product.find()

  res.send({ products })
}

export const getProductById = async (req, res) => {
  const { params } = req

  const products = await Product.findById(params.id)

  if (!products) statusError.notFound()

  res.send({ products })
}

export const postProduct = async (req, res) => {
  const { body } = req
  if (await Product.findOne({ name: body.name })) statusError.conflict()

  const product = await new Product(body).save()

  res.status(201).send({ product })
}

export const updateProduct = async (req, res) => {
  const { body, params } = req

  if (!(await Product.findById(params.id))) statusError.notFound()

  await Product.findByIdAndUpdate(params.id, body)

  res.status(204).end()
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params

  if (!(await Product.findById(id))) statusError.notFound()

  await Product.findByIdAndDelete(id)

  res.status(204).end()
}
