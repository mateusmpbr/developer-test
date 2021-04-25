import { Request, Response } from 'express'
import { Message } from '@models/Message'

import indexPage from '@views/messages/index'
import createPage from '@views/messages/create'

export const index = async (req: Request, res: Response) => {
  // TODO: implements logic
  return indexPage
}

export const create = async (req: Request, res: Response) => {
  // TODO: implements logic
  return createPage
}

export const store = async (req: Request, res: Response) => {
  // TODO: implements logic
}
