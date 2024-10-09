import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table, TableBody, TableCaption, TableCell, TableFoot, TableHead, TableHeaderCell, TableRoot, TableRow } from "../components/Table";

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
  const { name } = useParams();
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    axios.get(`/product/${name}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [name]);

  return (
    <section className='flex flex-col gap-1 text-black overflow-y-auto h-screen'>
      <TableRoot>
        <Table>
          <TableCaption>Grupo Empresarial Multired S.A. <span>@Tremor Components</span></TableCaption>
          <TableHead>
            <TableRow>
              <TableHeaderCell>Nombre</TableHeaderCell>
              <TableHeaderCell>Dirección</TableHeaderCell>
              <TableHeaderCell>Sales ($)</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Categoria</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.codigo}>
                {
                  item.Sucursal && (
                    <>
                      <TableCell>{item.Sucursal.nombre}</TableCell>
                      <TableCell>{item.Sucursal.direccion}</TableCell>
                    </>
                  )
                }
                <TableCell>$ {Intl.NumberFormat("es-CO").format(item.venta).toString()}</TableCell>
                {
                  item.Sucursal && (
                    <>
                      <TableCell>{item.Sucursal.categoria}</TableCell>
                      <TableCell className="text-center">{item.Sucursal.version}</TableCell>
                    </>
                  )
                }
              </TableRow>
            ))}
          </TableBody>
          <TableFoot>
            <TableRow>
              <TableHeaderCell colSpan={3} scope="row" className="text-right">$
                {
                  Intl.NumberFormat("es-CO").format(data.reduce((acc, item) => acc + item.venta, 0)).toString()
                }
              </TableHeaderCell>
            </TableRow>
          </TableFoot>
        </Table>
      </TableRoot>

    </section>
  )
}

export default ProductDetail;
