import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '../components/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';

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

  useEffect(() => {
    axios.get('/sucursalesPB')
      .then(res => {
        setSucursales(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <section className='text-black'>
      <div className='flex items-center justify-around bg-slate-200 px-4 py-2 rounded-t-md'>
        <h1 className='text-xs 2xl:text-lg 3xl:text-xl font-bold'>Sucursales Multired</h1>
        <div>
          <label className='text-xs 2xl:text-sm 3xl:text-lg'>Sucursal:</label>
          <input type='search' className='text-xs 2xl:text-sm 3xl:text-lg border border-gray-300 rounded-md' placeholder='N° Sucursal | Nombre'/>
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
            </TableRow>
          </TableHead>
          <TableBody>
            {sucursales.map(sucursal => (
              <TableRow key={sucursal.CCOSTO}>
                <TableCell>{sucursal.CODIGO}</TableCell>
                <TableCell>{sucursal.NOMBRE}</TableCell>
                <TableCell>{sucursal.DIRECCION}</TableCell>
                <TableCell>{sucursal.SUPERVISOR}</TableCell>
                <TableCell>{sucursal.CATEGORIA}</TableCell>
                <TableCell>{sucursal.ESTADO}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
    </section>
  );
}