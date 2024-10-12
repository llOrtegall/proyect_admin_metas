import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AreaChart } from '../components/ChartUtils';

interface VentaHora {
  id: number;
  hora: string;
  venta: number;
  asp?: number;
}

function VentaHora() {
  const { codigo } = useParams();
  const [data, setData] = useState<VentaHora[]>([]);

  useEffect(() => {
    axios.get(`/ventaHora/${codigo}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [codigo]);

  return (
    <div className="flex flex-col gap-16 items-center justify-center h-[90vh]">
      <AreaChart type={'default'} className="h-72" data={data}
        index="hora" categories={["venta", "asp"]} showLegend={false}
        colors={['emerald', 'yellow']}
      />
    </div>
  )
}

export default VentaHora;