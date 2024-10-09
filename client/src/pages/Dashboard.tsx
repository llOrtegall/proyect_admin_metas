import { ProgressBar } from '../components/ProgressBar';
import { DonutChart } from '../components/DonutChart';
import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import axios from 'axios';
import { Callout } from '../components/Callout';

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

function determineColor(porcentaje: number) {
  if (porcentaje <= 20) return 'bg-red-50'
  if (porcentaje <= 70) return 'bg-yellow-50'
  if (porcentaje <= 90) return 'bg-blue-50'
  return 'bg-green-100'
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
        <Card className='flex justify-around'>
          <DonutChart className='' data={data.productos} category='producto' value='vta_dia' showLabel={true}
            valueFormatter={(number: number) => `$${Intl.NumberFormat("us").format(number).toString()}`}
            colors={['emerald', 'blue', 'cyan', 'lime', 'fuchsia', 'gray', 'red', 'pink', 'amber', 'violet', 'yellow', 'indigo']}
          />
          <div className=''>
            <Callout title='Meta Chance Del día' variant='success'>
              <p className='text-2xl text-center'>${Intl.NumberFormat('es-CO').format(data.metaDia).toString()}</p>
            </Callout>
            <Callout title='Venta Actual Del día' variant='error'>
              <p className='text-2xl text-center'>${Intl.NumberFormat('es-CO').format(data.ventaDia).toString()}</p>
            </Callout>
          </div>
        </Card>
        <Card>
          test
        </Card>
      </div>
      <div className='grid grid-cols-3 gap-1 text-black dark:text-gray-400'>
        {
          data.productos.map((p, index) => (
            <Card key={index} className={`${determineColor(p.porcentaje)}`}>
              <p className='uppercase font-bold text-xl pb-1'>{p.producto}</p>
              <p>Venta:<span className='font-semibold dark:text-gray-200'> $ {Intl.NumberFormat('es-CO').format(p.vta_dia).toString()}</span></p>
              <p className='pb-3'>Aspiración: <span className='font-semibold dark:text-gray-200'>$ {Intl.NumberFormat('es-CO').format(p.meta_dia).toString()}</span></p>

              <div className='flex flex-1 gap-2'>
                <ProgressBar value={p.porcentaje} variant={p.porcentaje <= 20 ? 'error' : p.porcentaje <= 70 ? 'warning' : p.porcentaje <= 90 ? 'default' : 'success'} />
                <p className='text-center py-1 text-nowrap'>{p.porcentaje} %</p>
              </div>
            </Card>
          ))
        }
      </div>
    </>

  );
}

export default Dashboard;