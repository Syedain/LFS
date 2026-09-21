import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import productRoutes from './routes/productRoutes.js'

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'LFS backend API is running',
  })
})

app.get('/api/health', (request, response) => {
    response.json({
        success: true,
        message: 'LFS backend is running',
    })
})

app.use('/api/products', productRoutes)

app.listen(port, () => {
  console.log(`LFS backend running on http://localhost:${port}`)
})