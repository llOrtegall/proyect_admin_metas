import { DonutChartComp } from '../components/iu/DonutChart'
import { type Product } from '../types/metas'

import { CardMetaDia } from './iu/CardMetaDia'
import { useEffect, useState } from 'react'
import { Card, Title } from '@tremor/react'

import axios from 'axios'

interface response {
  productos: Product[]
  metaDia: number
  ventaDia: number
}

const calcularPorcentaje = (venta: number, meta: number) => {
  return Math.round((venta / meta) * 100)
}

const DashBoard = () => {
  const [data, setData] = useState<response>({ productos: [], metaDia: 0, ventaDia: 0 })

  useEffect(() => {
    axios.get('http://localhost:4000/api/metas')
      .then(response => {
        if (response.status === 200) {
          setData(response.data)
        }
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <article className='p-2'>

      <section className='flex items-center justify-around '>
        <div className='p-2'>
          <DonutChartComp products={data.productos} />
        </div>

        <div className='flex w-8/12 gap-2'>
          <Card className="bg-white shadow-lg rounded-lg p-6">
            <Title className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Meta del día: $ {new Intl.NumberFormat('es-CO').format(data.metaDia)}
            </Title>
            <article>
              <p className="text-gray-600 text-center">
                Esta meta del día, por el momento, se genera sumando todas las sucursales que ya tiene venta registrada del presente día.
              </p>
            </article>
          </Card>
          <CardMetaDia porcentaje={calcularPorcentaje(data.ventaDia, data.metaDia)} titulo='Meta Chance Día Actual' venta={data.ventaDia} />
        </div>
      </section>
      <section className='grid grid-cols-4 gap-2'>
        {
          data?.productos.map(p => (<CardMetaDia key={p.producto} porcentaje={calcularPorcentaje(p.vta_dia, p.meta_dia)} titulo={p.producto} venta={p.vta_dia} />))
        }
      </section>
    </article>
  )
}

export default DashBoard
