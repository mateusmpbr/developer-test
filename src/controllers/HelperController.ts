// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'

import sequelize from '../database/Sequelize'
import mongoose from '../database/Mongoose'

import indexTemplate from '@views/index.marko'
import exampleTemplate from '@views/example.marko'

export const index = (req: Request, res: Response) => {
  // Check Sequelize connection
  (async () => {
    try {
      await sequelize.authenticate()
      console.log('Sequelize connection has been established successfully.')
    } catch (error) {
      console.error('Unable to connect to the database from Sequelize:', error)
    }
  })()

  // Check Mongoose connection
  const db = mongoose.connection
  db.on('error', console.error.bind(console, 'Unable to connect to the database from Mongoose:'))
  db.once('open', function () {
    console.log('Mongoose connection has been established successfully.')
  })

  // Render template
  res.marko(indexTemplate, {})
}

export const example = (req: Request, res: Response) => {
  res.marko(exampleTemplate, {})
}
