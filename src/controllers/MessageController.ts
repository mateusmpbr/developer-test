// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'

import sequelize from '../database/Sequelize'
import mongoose from '../database/Mongoose'

// import { initModels, Messages, MessagesCreationAttributes } from '@models/init-models'

import indexTemplate from '@views/messages/index.marko'
import createTemplate from '@views/messages/create.marko'

export const index = async (req: Request, res: Response) => {
  res.marko(indexTemplate, {})
}

export const create = async (req: Request, res: Response) => {
  res.marko(createTemplate, {})
}

export const store = async (req: Request, res: Response) => {
  // import models into sequelize instance
  // initModels(sequelize)

  // const myOrders = await Order.findAll({ where: { customerId: cust.id }, include: ['customer'] })

  // const attr: MessagesCreationAttributes = {
  //   from: 12345,
  //   target_id: 54321,
  //   media: 'https://www.fundospaisagens.com/800x600/wallpaper-de-uma-galaxia.jpg',
  //   message: 'Essa é uma mensagem.'
  // }

  // const newMessage = await Messages.create(attr)

  // res.send(newMessage)
}
