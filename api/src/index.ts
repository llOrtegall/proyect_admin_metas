import { SugeridosRouter } from './routes/sugeridos.routes';
import { logueRouter } from './routes/logueo.routes';
import { RouterMetas } from './routes/metas.routes';
import { RouterSucursal } from './routes/sucursales.routes';
import { RoutesPowerBi } from './routes/sucursalespowerbi.routes';

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
app.use('/api', logueRouter)
app.use('/api', RouterSucursal)
app.use('/api', RoutesPowerBi)

app.listen(port, () => {
  console.log(`Server running on: http://localhost:${port}`)
})
