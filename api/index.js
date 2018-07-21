const express = require('express')

// Create express instnace
const app = express()

// Require API routes
const users = require('./routes/users')
const posts = require('./routes/posts')

// Import API Routes
app.use(users)
app.use(posts)

// Export the server middleware
module.exports = {
  path: '/api',
  handler: app
}
