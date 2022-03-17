const express = require('express')
const ExpressError = require('./expressError')
const {mean, median, mode, validateNums} = require('./operations')

const app = express()

app.use(express.json())


app.get('/mean', function (req, res){
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
      }
    let nums = validateNums(req.query.nums)
    if (nums instanceof Error){
        throw new ExpressError(nums.message)
    }

    const response = mean(req.query['nums'])

    return res.send(response)
})

app.get('/median', function (req, res){
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
      }
    let nums = validateNums(req.query.nums)
    if (nums instanceof Error){
        throw new ExpressError(nums.message)
    }
    const response = median(req.query['nums'])

    return res.send(response)
})
app.get('/mode', function (req, res){
    if (!req.query.nums) {
        throw new ExpressError('You must pass a query key of nums with a comma-separated list of numbers.', 400)
      }
    let nums = validateNums(req.query.nums)
    if (nums instanceof Error){
          throw new ExpressError(nums.message)
      }
    const response = mode(req.query['nums'])

    return res.send(response)
})

app.use(function (req, res, next) {
    const err = new ExpressError("Not Found",404);
  
    // pass the error to the next piece of middleware
    return next(err);
  });

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
  
    return res.json({
      error: err,
      message: err.message
    });
  });

app.listen(3000, () => {
    console.log('server started')
})

