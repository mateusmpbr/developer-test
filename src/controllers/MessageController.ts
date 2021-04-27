// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'

import { Message, MessageCreationAttributes } from '@models/init-models'

import MessageMongooseModel from '../models/mongoose/Message'
import MediaMongooseModel from '../models/mongoose/Media'

import indexTemplate from '@views/messages/index.marko'
import createTemplate from '@views/messages/create.marko'

export const index = async (req: Request, res: Response) => {
  const messages = await Message.findAll()
  const processedMessages = JSON.parse(JSON.stringify(messages))
  res.marko(indexTemplate, { processedMessages: processedMessages })
}

export const indexJson = async (req: Request, res: Response) => {
  const messages = await Message.findAll()
  res.json(messages)
}

export const create = async (req: Request, res: Response) => {
  res.marko(createTemplate, {})
}

export const store = async (req: Request, res: Response) => {
  // eslint-disable-next-line camelcase
  const { from, target_id } = req.body
  var { message, media } = req.body

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

  // OBS: remover a linha abaixo
  media = media ?? '/path/to/media'

  const attr: MessageCreationAttributes = {
    from,
    target_id,
    message,
    media
  }

  await Message.create(attr)

  // eslint-disable-next-line camelcase
  const message_status = res.statusCode === 200

  // Provavelmente esse comando irá se manter, mesmo se chamado pelo HTML
  res.json({
    from,
    target_id,
    message,
    message_status
  })
}
