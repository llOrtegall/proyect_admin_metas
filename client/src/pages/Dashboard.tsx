import { ProgressCircle } from '../components/ProgressCircle';
import { URL_API_DATA } from '../utils/constants';
import { ProgressBar } from '../components/ProgressBar';
import { ResponseProducts } from '../types/interfaces';
import { DonutChart } from '../components/DonutChart';
import { Callout } from '../components/Callout';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Card } from '../components/Card';
import axios from 'axios';

function determineColor(porcentaje: number) {
  if (porcentaje <= 20) return 'bg-red-50'
  if (porcentaje <= 70) return 'bg-yellow-50'
  if (porcentaje <= 90) return 'bg-blue-50'
  return 'bg-green-100'
}

function Dashboard() {
  const [data, setData] = useState<ResponseProducts>({ productos: [], metaDia: 0, ventaDia: 0, porcentaje: 0 })
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      axios.get(`${URL_API_DATA}/metas`)
        .then(res => {
          setData(res.data);
        })
        .catch(err => console.error(err));
    };

    fetchData(); // Fetch data immediately on mount
    const intervalId = setInterval(fetchData, 5 * 60 * 1000); // Fetch data every 5 minutes
    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  return (
    <>
      <div className='flex flex-col 2xl:flex-row gap-1 mb-1'>
        <Card className='flex justify-around'>
          <DonutChart
            valueFormatter={(number: number) => `$${Intl.NumberFormat("us").format(number).toString()}`}
            className='w-36 h-36 3xl:w-52 3xl:h-52  text-xs 2xl:text-sm 3xl:text-base'
            data={data.productos}
            category='producto'
            value='vta_dia'
            showLabel={true}
          />
          <div className='flex flex-col gap-1'>
            <Callout title='Meta Chance Del día' variant='success'>
              <p className='font-semibold text-xs 2xl:text-sm 3xl:text-xl text-center'>${Intl.NumberFormat('es-CO').format(data.metaDia).toString()}</p>
            </Callout>
            <Callout title='Venta Actual Del día' variant={data.metaDia >= data.ventaDia ? 'error' : 'success'}>
              <p className='font-semibold text-xs 2xl:text-sm 3xl:text-xl text-center'>${Intl.NumberFormat('es-CO').format(data.ventaDia).toString()}</p>
            </Callout>
          </div>

          <div className='flex flex-col items-center justify-center gap-1 text-xs 2xl:text-sm 3xl:text-base'>
            <ProgressCircle 
              className=''
              value={data.ventaDia}
              max={data.metaDia}
              radius={70}
              strokeWidth={20} >
              <span className="text-sm font-medium text-gray-900 dark:text-gray-50">
                {data.porcentaje} %
              </span>
            </ProgressCircle>
            <p className='text-black text-center'>Porcentaje Cumplimiento <br /> Multired - Chance</p>
          </div>
        </Card>
      </div>
      <div className='grid grid-cols-3 gap-1 text-black dark:text-gray-400'>
        {
          data.productos.map((p, index) => (
            <Card
              onClick={() => navigate(`ProductDetail/${p.producto}`)}
              key={index}
              className={`${determineColor(p.porcentaje)} hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer text-xs 2xl:text-sm 3xl:text-base`}
            >
              <p className='uppercase font-bold text-xs 2xl:text-sm 3xl:text-base'>{p.producto}</p>
              <p>Venta:<span className='font-semibold dark:text-gray-200'> $ {Intl.NumberFormat('es-CO').format(p.vta_dia).toString()}</span></p>
              <p className=''>Aspiración: <span className='font-semibold dark:text-gray-200'>$ {Intl.NumberFormat('es-CO').format(p.meta_dia).toString()}</span></p>

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