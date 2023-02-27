const express = require('express')
const app = express()
const api = require('./routes/index')
const PORT = 3000

app.use('/api', api)

app.listen(PORT, () => {
  console.log(`Server run : http://192.168.1.13:${PORT}/`)
})
