import request from 'supertest'
import app from '../../app'

describe('cors Middleware', () => {
  test('Should enable cors', async () => {
    app.get('/@middleware_cors', (req, res) => {
      res.send()
    })

    await request(app)
      .get('/@middleware_cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})
