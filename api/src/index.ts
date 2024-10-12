import { SugeridosRouter } from './routes/sugeridos.routes';
import { RouterMetas } from './routes/metas.routes';

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/api', RouterMetas)
app.use('/api', SugeridosRouter)

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`)
})
