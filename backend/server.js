const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')))

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body
  console.log('Contact form submitted:', { name, email, message })
  return res.json({ success: true })
})

app.get('/api/resume', (req, res) => {
  const resumePath = path.join(__dirname, 'assets', 'Mohtashim_Syed_Resume.pdf')
  res.download(resumePath)
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'frontend', 'dist', 'index.html'))
})

app.listen(PORT, () => console.log(`Server listening on ${PORT}`))