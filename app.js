const express = require('express')
const {mean, median, mode} = require('./operations')

const app = express()

app.use(express.json())


app.get('/mean', function (req, res){

    const response = mean(req.query['nums'])

    return res.send(response)
})

app.get('/median', function (req, res){

    const response = median(req.query['nums'])

    return res.send(response)
})
app.get('/mode', function (req, res){

    const response = mode(req.query['nums'])

    return res.send(response)
})


app.listen(3000, () => {
    console.log('server started')
})

