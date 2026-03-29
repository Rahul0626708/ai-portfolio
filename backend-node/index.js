const express = require('express')
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'node-gateway' })
})

// Route /api/projects → Spring Boot
app.use('/api/projects', createProxyMiddleware({
  target: 'http://localhost:8080',
  changeOrigin: true
}))

// Route /api/contact → Python FastAPI
app.use('/api/contact', createProxyMiddleware({
  target: 'http://localhost:8000',
  changeOrigin: true
}))

app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`)
})