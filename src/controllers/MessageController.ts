// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'

import { Message, MessageCreationAttributes } from '@models/init-models'

import MessageMongooseModel from '../models/mongoose/Message'
import MediaMongooseModel from '../models/mongoose/Media'

import indexTemplate from '@views/messages/index.marko'
import createTemplate from '@views/messages/create.marko'

export const index = async (req: Request, res: Response) => {
  const messages = await Message.findAll()
  // console.log(users.every(user => user instanceof User)) // true
  // console.log('All users:', JSON.stringify(users, null, 2))
  res.json(messages)
  // res.marko(indexTemplate, {})
}

export const create = async (req: Request, res: Response) => {
  res.marko(createTemplate, {})
}

export const store = async (req: Request, res: Response) => {
  const { from, target_id } = req.body
  var { message, media } = req.body

  // const myOrders = await Order.findAll({ where: { customerId: cust.id }, include: ['customer'] })

  if (!message) {
    const randomMessage = await MessageMongooseModel
      .aggregate([{ $sample: { size: 1 } }, { $project: { _id: false, message: true } }])

    message = randomMessage[0].message
  }

  // if (!media) {
  //   const randomMedia = await MediaMongooseModel
  //     .aggregate([{ $sample: { size: 1 } }, { $project: { _id: false, media: true } }])

  //   media = randomMedia.length
  // }

  const attr: MessageCreationAttributes = {
    from,
    target_id,
    message,
    media
  }

  await Message.create(attr)

  const message_status = res.statusCode === 200

  res.json({
    from,
    target_id,
    message,
    message_status
  })
}
