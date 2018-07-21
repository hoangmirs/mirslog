const { Router } = require('express')

const router = Router()

// Mock Posts
const posts = [
  { title: 'Bai 1', description: 'Bai 1 thi co gi dau ma kho khan' },
  { title: 'Bai 2', description: 'Bai 2xxx thi co gi dau ma kho khan' },
  { title: 'Bai 3', description: 'Bai 3 thi co gi dau ma kho khan' },
]

/* GET posts listing. */
router.get('/posts', function (req, res, next) {
  res.json(posts)
})

/* GET post by ID. */
router.get('/posts/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < posts.length) {
    res.json(posts[id])
  } else {
    res.sendStatus(404)
  }
})

module.exports = router
