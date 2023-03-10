import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

import connectToDatabase from './configs/database.js'
import mainRouter from './routers/mainRouter.js'
import { PORT } from './configs/keys.js'
import { handleHttpError } from './helpers/error.js'

const app = express()

// Middlewares
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(morgan('dev'))
app.use(helmet())
app.use(
  cors({
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
  })
)

// Database connection
connectToDatabase()

// Routes
app.use('/api/v1', mainRouter)

// Error handler middleware
app.use(handleHttpError)

// Server start
app.listen(PORT, () => console.log(`SERVER ONLINE PORT: ${PORT}`))
