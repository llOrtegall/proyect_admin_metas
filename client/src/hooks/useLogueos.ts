import { useAuth } from '../contexts/AuthProvider';
import { URL_API_DATA } from '../utils/constants';
import { Logueo } from '../types/interfaces';
import { useState, useEffect } from 'react';
import axios from 'axios';

const useLogueos = (fecha: string, filter: string) => {
  const [logueo, setLogueo] = useState<Logueo[]>([]);
  const { empresa } = useAuth();

  useEffect(() => {
    axios.get(`${URL_API_DATA}/logueo`, {
      params: {
        fecha: fecha,
        empresa: empresa
      }
    })
    .then(response => setLogueo(response.data))
    .catch(error => console.log(error));
  }, [fecha, empresa]);

  const dataFiltered = logueo.filter(log => 
    log.SUCURSAL.toString().includes(filter) ||
    log.NOMBRES.toLowerCase().includes(filter.toLowerCase()) ||
    log.DOCUMENTO.toLowerCase().includes(filter.toLowerCase())
  );
  return dataFiltered;
};

export { useLogueos }