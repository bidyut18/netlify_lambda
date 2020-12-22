const express = require('express')
const serverless = require('serverless-http')

const app = express()
const router = express.Router()


router.get('/', (req, res) => {
    res.send({
        'msg': "Hello lambda"
    })
})
router.get('/test', (req, res) => {
    res.send({
        'msg': "Hello test"
    })
})

app.use('/.netlify/functions/api', router)

module.exports.handler = serverless(app)