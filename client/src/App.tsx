import { DonutChart } from './components/DonutChart'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Products {
  producto: string
  vta_dia: number
  meta_dia: number
}

interface Response {
  productos: Products[]
  metaDia: number
  ventaDia: number
}

function App() {
  const [data, setData] = useState<Response>({ productos: [], metaDia: 0, ventaDia: 0 })

  useEffect(() => {
    axios.get('/metas')
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <section className='h-screen w-screen flex items-center justify-center'>

      <DonutChart className='w-96 h-96' data={data.productos} category='producto' value='vta_dia' showLabel={true}
        valueFormatter={() => `$${Intl.NumberFormat('CO').format(data.ventaDia).toString()}`}
        />

    </section>
  )
}

export default App
