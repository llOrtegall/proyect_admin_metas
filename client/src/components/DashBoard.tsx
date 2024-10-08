import { DonutChartComp } from '../components/iu/DonutChart'
import { type Product } from '../types/metas'

import { useEffect, useState } from 'react'
import { CardMetaDia } from './iu'
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

        <div className='flex w-6/12 gap-2'>
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
