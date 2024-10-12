import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '../components/Table';
import { useEffect, useState } from 'react'
import axios from 'axios'

interface Sugerido {
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

  useEffect(() => {
    axios.get('/sugeridos')
      .then(response => setSugeridos(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <section className='text-black'>
      <div className='flex items-center justify-around bg-slate-200 px-4 py-2 rounded-t-md'>
        <h1 className='text-2xl font-bold'>Cumplimiento Sugeridos Multired</h1>
        <form>
          <label>Fecha:</label>
          <input type='date' className='border border-gray-300 rounded-md' />
        </form>
        <button className='bg-green-600 px-4 py-2 rounded-md text-white hover:bg-green-500'>Export Excel</button>
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
            {sugeridos.map(sug => (
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