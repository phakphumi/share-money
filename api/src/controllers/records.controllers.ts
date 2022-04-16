import { Request, Response } from "express"

const getRecords = (req: Request, res: Response) => {
  res.json('all record')
}

export default {
  getRecords
}