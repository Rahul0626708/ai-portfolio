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
  target: 'https://portfolio-java-g9ov.onrender.com',
  changeOrigin: true
}))

// Route /api/contact → Python FastAPI
app.use('/api/contact', createProxyMiddleware({
  target: 'https://portfolio-python-ttfc.onrender.com',
  changeOrigin: true
}))

app.listen(PORT, () => {
  console.log(`Gateway running on port ${PORT}`)
})
app.use('/api/chat', createProxyMiddleware({
  target: 'http://localhost:8000',
  changeOrigin: true
}))