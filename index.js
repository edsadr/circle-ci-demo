'use strict'

const express = require('express')
const bodyParser = require('body-parser')
let app = express()
let port = process.env.port || 3000

// middlewares.
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => res.send('Nice server from Codeanywhere!'))

app.post('/form', (req, res) => res.json(req.body))

app.listen(port, () => console.log(`Started on http://127.0.0.1:${port}`))
