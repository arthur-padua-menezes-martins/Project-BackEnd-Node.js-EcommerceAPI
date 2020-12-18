import MongoHelper from '../infra/repository/db/mongo/driver/mongoose/patterns/singleton/mongo-helper'
import env from './config/env'

MongoHelper.instance.connect().then(async () => {
  const app = (await import('./config/app')).default

  app.listen(env.application.port, () => {
    console.log(`server available at localhost:${env.application.port}`)
  })
}).catch(console.error)
