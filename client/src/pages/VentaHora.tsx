import { AreaChart } from '../components/ChartUtils';
import { URL_API_DATA } from '../utils/constants';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface VentaHora {
  ID: number;
  HORA: string;
  CHANCE: number;
  ASP: number;
}

function VentaHora() {
  const { codigo } = useParams();
  const [data, setData] = useState<VentaHora[]>([]);

  useEffect(() => {
    axios.get(`${URL_API_DATA}/ventaHora/${codigo}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [codigo]);


  return (
    <div className='flex flex-col gap-16 items-center justify-center h-[90vh]'>
      {
        data !== undefined
          ? (
            <AreaChart type={'default'} className='h-72' data={data}
              index='HORA' categories={['ASP', 'CHANCE']} 
            />
          )
          : <p>Nada No Cargada...</p>
      }
    </div>
  )
}

export default VentaHora;