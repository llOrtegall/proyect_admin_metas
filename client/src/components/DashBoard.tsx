import { DonutChartComp } from '../components/iu/DonutChart'
import { type Product } from '../types/metas'

import { useEffect, useState } from 'react'
import axios from 'axios'
import { CardMetaDia } from './iu'

const calcularPorcentaje = (venta: number, meta: number) => {
  return Math.round((venta / meta) * 100)
}

const DashBoard = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    axios.get('http://localhost:4000/api/metas')
      .then(response => {
        if (response.status === 200) {
          setProducts(response.data)
        }
      })
      .catch(error => console.log(error))
  }, [])

  return (
    <article className='p-2'>
      <section>
        <DonutChartComp products={products!} />
      </section>
      <section className='grid grid-cols-4 gap-2'>
        {
          products?.map(p => (<CardMetaDia key={p.producto} porcentaje={calcularPorcentaje(p.vta_dia, p.meta_dia)} titulo={p.producto} venta={p.vta_dia} />))
        }
      </section>
    </article>
  )
}

export default DashBoard
