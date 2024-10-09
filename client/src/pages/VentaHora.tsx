import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function VentaHora() {
  const { codigo } = useParams();

  useEffect(() => {
    axios.get(`/ventaHora/${codigo}`)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, [codigo]);

  return (
    <div>
      <h1>VentaHora</h1>
    </div>
  );
}

export default VentaHora;