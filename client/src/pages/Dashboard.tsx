import { ProgressBar } from '../components/ProgressBar';
import { DonutChart } from '../components/DonutChart';
import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import axios from 'axios';

interface Products {
  producto: string
  vta_dia: number
  meta_dia: number
  porcentaje: number
}

interface Response {
  productos: Products[]
  metaDia: number
  ventaDia: number
}

function Dashboard() {
  const [data, setData] = useState<Response>({ productos: [], metaDia: 0, ventaDia: 0 })

  useEffect(() => {
    axios.get('/metas')
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <div className='flex gap-1 mb-1'>
        <Card>
          <DonutChart className='' data={data.productos} category='producto' value='vta_dia' showLabel={true}
            valueFormatter={() => `$${Intl.NumberFormat('es-CO').format(data.ventaDia).toString()}`} />
        </Card>
        <Card>
          test
        </Card>
      </div>
      <div className='grid grid-cols-3 gap-1 text-gray-400'>
        {
          data.productos.map((p, index) => (
            <Card key={index}>
              <p className='text-center uppercase font-bold text-xl '>{p.producto}</p>
              <p>Venta:<span className='font-semibold text-gray-200'> $ {Intl.NumberFormat('es-CO').format(p.vta_dia).toString()}</span></p>
              <p className='pb-3'>Aspiración: <span className='font-semibold text-gray-200'>$ {Intl.NumberFormat('es-CO').format(p.meta_dia).toString()}</span></p>

              <p className='text-center py-1'>{p.porcentaje} %</p>
              <ProgressBar value={p.porcentaje} variant={p.porcentaje <= 20 ? 'error' : p.porcentaje <= 70 ? 'warning' : p.porcentaje <= 90 ? 'default' : 'success'} />
            </Card>
          ))
        }
      </div>
    </>

  );
}

export default Dashboard;