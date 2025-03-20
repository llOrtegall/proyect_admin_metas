import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '../components/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { URL_API_DATA } from '../utils/constants';

export interface Logueo {
  SUCURSAL: number;
  NOMBRES: string;
  DOCUMENTO: string;
  NOMBRECARGO: string;
  FECHACREATE: string;
  FECHAUPDATE: string;
}

function UsuariosLogueados() {
  const [logueo, setLogueo] = useState<Logueo[]>([]);
  const [fecha, setFecha] = useState<string>('');
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    axios.get(`${URL_API_DATA}/logueo?fecha=${fecha}`)
      .then(response => setLogueo(response.data))
      .catch(error => console.log(error));
  }, [fecha]);

  const dataFiltered = logueo.filter(log => log.SUCURSAL.toString().includes(filter))

  return (
    <section className='text-black'>
      <div className='flex items-center justify-around bg-slate-200 px-4 py-2 rounded-t-md'>
        <h1 className='text-sm 2xl:text-lg 3xl:text-2xl font-bold'>Usuarios Logueados</h1>
        <div>
          <label className='text-xs 2xl:text-sm 3xl:text-base '>Sucursal:</label>
          <input type='search' className='text-xs 2xl:text-sm 3xl:text-base border border-gray-300 rounded-md' placeholder='N° Sucursal' value={filter} onChange={ev => setFilter(ev.target.value)} />
        </div>
        <form>
          <label className='text-xs 2xl:text-sm 3xl:text-base '>Fecha:</label>
          <input type='date' className='text-xs 2xl:text-sm 3xl:text-base border border-gray-300 rounded-md' value={fecha} onChange={ev => setFecha(ev.target.value)} />
        </form>
        {/* <ExcelData datos={sugeridos} /> */}
      </div>
      <div className='h-[92vh] overflow-y-auto'>
        <Table>
          <TableHead className='sticky top-0 bg-blue-100'>
            <TableRow>
              <TableHeaderCell>Sucursal</TableHeaderCell>
              <TableHeaderCell>Documento</TableHeaderCell>
              <TableHeaderCell>Nnombres</TableHeaderCell>
              <TableHeaderCell>Cargo</TableHeaderCell>
              <TableHeaderCell>Hora Primer Login</TableHeaderCell>
              <TableHeaderCell>Hora Ultimo Login</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataFiltered.map((log, index) => (
              <TableRow key={index}>
                <TableCell>{log.SUCURSAL}</TableCell>
                <TableCell>{log.DOCUMENTO}</TableCell>
                <TableCell>{log.NOMBRES}</TableCell>
                <TableCell>{log.NOMBRECARGO}</TableCell>
                <TableCell>
                  {log.FECHACREATE.split('T')[0].split('-').reverse().join('/')}
                  {' - '}
                  {log.FECHACREATE.split('T')[1].slice(0, 8)}
                </TableCell>
                <TableCell>
                  {log.FECHAUPDATE.split('T')[0].split('-').reverse().join('/')}
                  {' - '}
                  {log.FECHAUPDATE.split('T')[1].slice(0, 8)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </section>
  );
}

export default UsuariosLogueados;