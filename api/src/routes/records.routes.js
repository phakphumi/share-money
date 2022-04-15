import express from 'express'
import recordsController from '../controllers/records.controllers.js'

const recordsRouter = express.Router()

recordsRouter.get('/', recordsController.getRecords)

export default recordsRouter;