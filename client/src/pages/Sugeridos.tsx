import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '../components/Table';
import ExcelData from '../components/ExportExcel';
import { useEffect, useState } from 'react'
import axios from 'axios'

export interface Sugerido {
  sucursal: number
  documento: string
  nombres: string
  sugerido1: string
  sugerido2: string
  venta_sugerido: number
  meta_sugerido1: number
  meta_sugerido2: number
}

function Sugeridos() {
  const [sugeridos, setSugeridos] = useState<Sugerido[]>([]);
  const [fecha, setFecha] = useState<string>('');
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    axios.get(`/sugeridos?fecha=${fecha}`)
      .then(response => setSugeridos(response.data))
      .catch(error => console.log(error));
  }, [fecha]);

  const dataFiltered = sugeridos.filter(sug => sug.sucursal.toString().includes(filter))

  return (
    <section className='text-black'>
      <div className='flex items-center justify-around bg-slate-200 px-4 py-2 rounded-t-md'>
        <h1 className='text-2xl font-bold'>Cumplimiento Sugeridos Multired</h1>
        <div>
          <label>Sucursal:</label>
          <input type='search' className='border border-gray-300 rounded-md' placeholder='N° Sucursal' value={filter} onChange={ev => setFilter(ev.target.value)}/>
        </div>
        <form>
          <label>Fecha:</label>
          <input type='date' className='border border-gray-300 rounded-md' value={fecha} onChange={ev => setFecha(ev.target.value)}/>
        </form>
        {/* <button className='bg-green-600 px-4 py-2 rounded-md text-white hover:bg-green-500'>Export Excel</button> */}
        <ExcelData datos={sugeridos} />
      </div>
      <div className='h-[92vh] overflow-y-auto'>
        <Table>
          <TableHead className='sticky top-0 bg-blue-100'>
            <TableRow>
              <TableHeaderCell>Sucursal</TableHeaderCell>
              <TableHeaderCell>Documento</TableHeaderCell>
              <TableHeaderCell>Nombres</TableHeaderCell>
              <TableHeaderCell>Sugerido 1</TableHeaderCell>
              <TableHeaderCell>Sugerido 2</TableHeaderCell>
              <TableHeaderCell>Venta sugerido</TableHeaderCell>
              <TableHeaderCell>Meta sugerido 1</TableHeaderCell>
              <TableHeaderCell>Meta sugerido 2</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataFiltered.map(sug => (
              <TableRow key={sug.documento}>
                <TableCell>{sug.sucursal}</TableCell>
                <TableCell>{sug.documento}</TableCell>
                <TableCell>{sug.nombres}</TableCell>
                <TableCell>{sug.sugerido1}</TableCell>
                <TableCell>{sug.sugerido2}</TableCell>
                <TableCell>$ {Intl.NumberFormat("es-CO").format(sug.venta_sugerido).toString()}</TableCell>
                <TableCell>$ {Intl.NumberFormat("es-CO").format(sug.meta_sugerido1).toString()}</TableCell>
                <TableCell>$ {Intl.NumberFormat("es-CO").format(sug.meta_sugerido2).toString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

    </section>
  )
}

export default Sugeridos;