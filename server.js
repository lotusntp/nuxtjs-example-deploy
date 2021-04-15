const express = require('express')
const cors = require('cors')
const app = express()
const router = express.Router()
app.use(cors())
app.use(express.json())
const mockToken = 'ff68a5880c96020950c4c35d370349171536295020e86772'
const user = {
  id: 1,
  username: 'john',
  email: 'john@doe.com',
  name: 'John Doe',
}
router.get('/me', (req, res) => {
  const headers = req.headers.authorization
  const token = headers && headers.split(' ')[1]

  if (token === mockToken) {
    return res.json({
      data: {
        user,
      },
    })
  } else {
    return res.status(401).json({
      message: 'Invalid token',
    })
  }
})
router.post('/login', (req, res) => {
  const { email, password } = req.body
  // query db.
  if (email === 'admin@admin.com' && password === '123456') {
    return res.json({
      data: {
        user,
        token: mockToken
      },
    })
  } else {
    return res.status(401).json({
      message: 'Invalid Password',
    })
  }
})
app.use('/api', router)
app.listen(12345, () => {
  console.log('Mock API start on port 12345')
})
