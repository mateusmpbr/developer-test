import express from 'express'
import markoMiddleware from '@marko/express'
import { configure } from 'lasso'
import { serveStatic } from 'lasso/middleware'

import errorTemplate from '@views/error.marko'

var createError = require('http-errors')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/Index')
var exampleRouter = require('./routes/Example')
var messageRouter = require('./routes/Message')

configure({
  plugins: [
    'lasso-marko'
  ]
})

var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))
app.use(markoMiddleware()) // enable res.marko(template, data)
app.use(serveStatic()) // serve static assets with lasso

app.use('/', indexRouter)
app.use('/example', exampleRouter)
app.use('/messages', messageRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.marko(errorTemplate, {})
})

module.exports = app
