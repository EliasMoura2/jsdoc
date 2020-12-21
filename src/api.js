const express = require('express');
const morgan = require('morgan');

const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

/**
 * @module api
 */

/**
 * Index route
 *@name Index
 *@path {GET} /api/v1/
 */
app.get('/api/v1/', (req, res) => {
  res.send('Welcome!')
})

/**
 * User route GET
 * @name Users
 * @path {GET} /api/v1/users
 */
app.get('/users', (req, res) => {
  res.send('Welcome!')
})

/**
 * User route POST
 * @name Users Post
 * @path {POST} /api/v1/users
 */
app.post('/users', (req, res) => {
  res.send('Welcome!')
})

/**
 * User route PUT
 * @name Users PUT
 * @path {PUT} /api/v1/users
 */
app.put('/users/:id', (req, res) => {
  res.send('Welcome!')
})

/**
 * User route DELETE
 * @name Users DELETE
 * @path {DELETE} /api/v1/users
 */
app.delete('/users/:id', (req, res) => {
  res.send('Welcome!')
})

// app.get('/todos', (req, res) => {
//   res.send('Welcome!')
// })

module.exports = app 