import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '../components/Table';
import { SugeridosInterface } from '../types/Sugeridos';
import { useAuth } from '../contexts/AuthProvider';
import { URL_API_DATA } from '../utils/constants';
import { useEffect, useState } from 'react'
import axios from 'axios'

function Sugeridos() {
  const [sugeridos, setSugeridos] = useState<SugeridosInterface[]>([]);
  const [fecha, setFecha] = useState<string>('');
  const [filter, setFilter] = useState<string>('');
  const { empresa } = useAuth();

  const company = empresa === 'Multired' ? 39627 : 39628;

  useEffect(() => {
    axios.get(`${URL_API_DATA}/sugeridos`, { params: { fecha, zona: company}})
      .then(response => setSugeridos(response.data))
      .catch(error => console.log(error));
  }, [fecha, company]);

  const dataFiltered = sugeridos.filter(sug => filter ? sug.SUCURSAL.toString().includes(filter) : true);

  return (
    <section className='text-black'>
      <div className='flex items-center justify-around bg-slate-200 px-4 py-2 rounded-t-md'>
        <h1 className='text-xs 2xl:text-lg 3xl:text-xl font-bold'>Cumplimiento Sugeridos { company === 39627 ? 'Multired' : '' } { company === 39628 ? 'Servired' : '' }</h1>
        <div>
          <label className='text-xs 2xl:text-sm 3xl:text-lg'>Sucursal:</label>
          <input type='search' className='text-xs 2xl:text-sm 3xl:text-lg border border-gray-300 rounded-md' placeholder='N° Sucursal' value={filter} onChange={ev => setFilter(ev.target.value)}/>
        </div>
        <form>
          <label className='text-xs 2xl:text-sm 3xl:text-lg'>Fecha:</label>
          <input type='date' className='text-xs 2xl:text-sm 3xl:text-lg border border-gray-300 rounded-md' value={fecha} onChange={ev => setFecha(ev.target.value)}/>
        </form>
        {/* <ExcelData datos={sugeridos} /> */}
      </div>
      <div className='h-[89vh] 3xl:h-[92vh] overflow-y-auto'>
        <Table>
          <TableHead className='sticky top-0 bg-blue-100'>
            <TableRow>
              <TableHeaderCell>ID</TableHeaderCell>
              <TableHeaderCell>DOCUMENTO</TableHeaderCell>
              <TableHeaderCell>NOMBRES</TableHeaderCell>
              <TableHeaderCell>SUCURSAL</TableHeaderCell>
              <TableHeaderCell>NOMBRE SUCURSAL</TableHeaderCell>
              <TableHeaderCell>CATEGORIA</TableHeaderCell>
              <TableHeaderCell>PRODUCTO</TableHeaderCell>
              <TableHeaderCell>VALOR SUGERIDO</TableHeaderCell>
              <TableHeaderCell>VALOR META</TableHeaderCell>
              <TableHeaderCell>ESTADO</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataFiltered.map((sug, index) => (
              <TableRow key={index + 1}>
                <TableCell className="truncate max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">{sug.ID}</TableCell>
                <TableCell className="truncate max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">{sug.DOCUMENTO}</TableCell>
                <TableCell className="truncate max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">{sug.NOMBRES}</TableCell>
                <TableCell className="truncate max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">{sug.SUCURSAL}</TableCell>
                <TableCell className="truncate max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">{sug.NOMBRE_SUCURSAL}</TableCell>
                <TableCell className="truncate max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">{sug.CATEGORIA}</TableCell>
                <TableCell className="truncate max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">{sug.PRODUCTO}</TableCell>
                <TableCell className="truncate max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">$ {Intl.NumberFormat("es-CO").format(sug.VALOR_SUGERIDO).toString()}</TableCell>
                <TableCell className="truncate max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">$ {Intl.NumberFormat("es-CO").format(sug.VALOR_META).toString()}</TableCell>
                <TableCell className="truncate max-w-[150px] whitespace-nowrap overflow-hidden text-ellipsis">{sug.ESTADO}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </section>
  )
}

export default Sugeridos;