import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '../components/Table';
import { RiEditLine } from '@remixicon/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface SucursalPowerBi {
  ZONA: string;
  CCOSTO: string;
  CODIGO: string;
  NOMBRE: string;
  DIRECCION: string;
  TIPO: string;
  DISPOSITIVO: string;
  SUPERVISOR: string;
  CANAL: string;
  CATEGORIA: string;
  HORA_ENTRADA: string;
  HORA_SALIDA: string;
  HORA_ENTRADA_FES: string;
  HORA_SALIDA_FES: string;
  SUBZONA: string;
  CELULA: string;
  HORAS_ORDINARIAS: number;
  HORAS_FESTIVAS: number;
  ESTADO: string;
}

export default function SucursalesPage () {
  const [sucursales, setSucursales] = useState<SucursalPowerBi[]>([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/sucursalesPB')
      .then(res => {
        setSucursales(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const sucursalesFiltered = sucursales.filter(suc => suc.CODIGO.toLowerCase().includes(search))

  return (
    <section className='text-black'>
      <div className='flex items-center justify-around bg-slate-200 px-4 py-2 rounded-t-md'>
        <h1 className='text-xs 2xl:text-lg 3xl:text-xl font-bold'>Sucursales Multired</h1>
        <div>
          <label className='text-xs 2xl:text-sm 3xl:text-lg'>Sucursal:</label>
          <input type='search' value={search} onChange={e => setSearch(e.target.value)} placeholder='N° Sucursal | Nombre'
            className='text-xs 2xl:text-sm 3xl:text-lg border border-gray-300 rounded-md'/>
        </div>
      </div>

      <div className='h-[89vh] 3xl:h-[92vh] overflow-y-auto'>
        <Table>
          <TableHead className='sticky top-0 bg-blue-100'>
            <TableRow>
              <TableHeaderCell>C. Costo</TableHeaderCell>
              <TableHeaderCell>Codigo</TableHeaderCell>
              <TableHeaderCell>Nombre</TableHeaderCell>
              <TableHeaderCell>Dirreción</TableHeaderCell>
              <TableHeaderCell>Supervisor</TableHeaderCell>
              <TableHeaderCell>Categoría</TableHeaderCell>
              <TableHeaderCell>Estado</TableHeaderCell>
              <TableHeaderCell>Opciones</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sucursalesFiltered.map(sucursal => (
              <TableRow key={sucursal.CODIGO}>
                <TableCell>{sucursal.CCOSTO}</TableCell>
                <TableCell>{sucursal.CODIGO}</TableCell>
                <TableCell className='text-start'>{sucursal.NOMBRE}</TableCell>
                <TableCell className='text-start'>{sucursal.DIRECCION}</TableCell>
                <TableCell className='text-start'>{sucursal.SUPERVISOR}</TableCell>
                <TableCell>{sucursal.CATEGORIA}</TableCell>
                <TableCell>{sucursal.ESTADO}</TableCell>
                <TableCell>
                  <button onClick={() => navigate(`/Sucursal/${sucursal.CODIGO}`)} className='bg-yellow-200 rounded-md px-2 py-1' title='Editar sucursal'>
                    <RiEditLine />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
    </section>
  );
}