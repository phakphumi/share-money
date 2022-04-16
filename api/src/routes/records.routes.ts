import express from 'express'
import recordsController from '../controllers/records.controllers'

const recordsRouter = express.Router()

recordsRouter.get('/', recordsController.getRecords)

export default recordsRouter;