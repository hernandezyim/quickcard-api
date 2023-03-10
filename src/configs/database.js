import mongoose from 'mongoose'
import { DATABASE_CONNECTION_STRING } from './keys.js'

export default async function connectToDatabase() {
  try {
    await mongoose.connect(DATABASE_CONNECTION_STRING)
    console.log('DATABASE ONLINE')
  } catch (error) {
    console.error(`Error connecting to database: ${error.message}`)
    process.exit(1) // Exit process with failure
  }
}
