import { Router } from 'express'
import studentsRouter from './students'

const routes = Router()

routes.use('/students', studentsRouter)

export default routes
