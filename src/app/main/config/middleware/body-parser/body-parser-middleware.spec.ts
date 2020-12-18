import request from 'supertest'
import app from '../../app'

describe('body-parser Middleware', () => {
  test('Should parse body as json', async () => {
    app.post('/@middleware_body_parser', (req, res) => {
      res.send(req.body)
    })

    await request(app)
      .post('/@middleware_body_parser')
      .send({ body: null })
      .expect({ body: null })
  })
})
