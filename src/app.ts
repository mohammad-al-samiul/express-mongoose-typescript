import express, { Request, Response } from 'express'
import cors from 'cors'
import { StudentRoutes } from './app/modules/student/student.route'
const app = express()

//parser
app.use(express.json())
app.use(cors())

//application routes
app.use('/api/v1/students', StudentRoutes)
app.use('/api/v1/students', StudentRoutes)
app.use('/api/v1/students', StudentRoutes)

app.get('/', (req: Request, res: Response) => {
  const a = 10
  res.send(a)
})

export default app
