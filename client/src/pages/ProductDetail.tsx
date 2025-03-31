import { Table, TableBody, TableCell, TableFoot, TableHead, TableHeaderCell, TableRow } from '../components/Table';
import { useParams, useNavigate } from 'react-router-dom';
import { URL_API_DATA } from '../utils/constants';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  codigo: number;
  venta: number;
  Sucursal: {
    nombre: string;
    direccion: string;
    categoria: string;
    version: string;
  }
}

function ProductDetail() {
  const [data, setData] = useState<Product[]>([]);
  const navigate = useNavigate();
  const { name } = useParams();


  useEffect(() => {
    axios.get(`${URL_API_DATA}/product/${name}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [name]);

  return (
    <section className=''>
      <div className='h-[92vh] overflow-y-auto'>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell>N°</TableHeaderCell>
              <TableHeaderCell>Nombre</TableHeaderCell>
              <TableHeaderCell>Dirección</TableHeaderCell>
              <TableHeaderCell>Ventas ($)</TableHeaderCell>
              <TableHeaderCell>Categoría</TableHeaderCell>
              <TableHeaderCell>Versión</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item, index) => (
              <TableRow key={item.codigo} className={name === 'Chance' ? 'hover:bg-yellow-100 cursor-pointer' : ''}
                onClick={() => name === 'Chance' ? navigate(`/ventaHora/${item.codigo}`) : ''}
              >
                <TableCell>{index + 1}</TableCell>
                {
                  item.Sucursal && (
                    <>
                      <TableCell>{item.Sucursal.nombre}</TableCell>
                      <TableCell>{item.Sucursal.direccion}</TableCell>
                    </>
                  )
                }
                <TableCell>$ {Intl.NumberFormat('es-CO').format(item.venta).toString()}</TableCell>
                {
                  item.Sucursal && (
                    <>
                      <TableCell>{item.Sucursal.categoria}</TableCell>
                      <TableCell className='text-center'>{item.Sucursal.version}</TableCell>
                    </>
                  )
                }
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <Table>
        <TableFoot>
          <TableRow>
            <TableCell>{data.length} Sucursales</TableCell>
            <TableCell>Producto: <span className='pl-1'>{name || 'undefined'}</span></TableCell>
            <TableHeaderCell colSpan={2}>
              Total:
              <span className='pl-2'>$ {Intl.NumberFormat('es-CO').format(data.reduce((acc, item) => acc + item.venta, 0)).toString()}</span>
            </TableHeaderCell>
          </TableRow>
        </TableFoot>
      </Table>
    </section>
  )
}

export default ProductDetail;
