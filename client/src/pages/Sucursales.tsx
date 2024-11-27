import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '../components/Table';
import { SucursalPowerBi } from '../types/interfaces';
import { useNavigate } from 'react-router-dom';
import { RiEditLine } from '@remixicon/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../components/Card';
import { Label } from '../components/Label';
import { Badge } from '../components/Badge';
import { Input } from '../components/Input';

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
    <section className='space-y-1 px-1 py-1'>
      <Card className='flex text-black items-center justify-around border-blue-400 border-t-4 py-2'>

        <div className='flex items-center gap-2'>
          <Label className=''>Sucursal:</Label>
          <Input 
            type='search' 
            value={search} 
            onChange={e => setSearch(e.target.value)} placeholder='3984** | Punto 25 ****'
          />
        </div>

        <div className='flex items-center gap-2'>
         <Label>
          N° Sucursales:
         </Label>
         <Badge variant='warning'>
          {sucursalesFiltered.length}
         </Badge>
        </div>
      </Card>

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