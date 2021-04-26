// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express'
import { Message } from '@models/Message'

import indexTemplate from '@views/messages/index.marko'
import createTemplate from '@views/messages/create.marko'

export const index = (req: Request, res: Response) => {
  res.marko(indexTemplate, {})
}

export const create = (req: Request, res: Response) => {
  res.marko(createTemplate, {})
}

export const store = (req: Request, res: Response) => {

}
