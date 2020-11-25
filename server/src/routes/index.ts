import { Router } from 'express'

import questionsRouter from './questions.routes'
import studentsRouter from './students.routes'
import testsRouter from './tests.routes'

const routes = Router()

routes.use('/questions', questionsRouter)
routes.use('/students', studentsRouter)
routes.use('/tests', testsRouter)

export default routes
