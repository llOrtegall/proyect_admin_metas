import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '../components/Table';
import { SucursalPowerBi } from '../types/interfaces';
import { useAuth } from '../contexts/AuthProvider';
import { URL_API_DATA } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { RiEditLine } from '@remixicon/react';
import { Label } from '../components/Label';
import { Input } from '../components/Input';
import { useEffect, useState } from 'react';
import { Badge } from '../components/Badge';
import { Card } from '../components/Card';
import axios from 'axios';

export default function SucursalesPage() {
  const [sucursales, setSucursales] = useState<SucursalPowerBi[]>([]);
  const { empresa } = useAuth();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const company = empresa === 'Multired' ? 39627 : 39628;

  useEffect(() => {
    axios.get(`${URL_API_DATA}/sucursalesPB`, { params: { zona: company } })
      .then(res => {
        setSucursales(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }, [company]);

  const sucursalesFiltered = sucursales.filter(suc => suc.CODIGO.toLowerCase().includes(search))

  return (
    <section className='space-y-1 px-1 py-1'>
      <Card className='flex text-black items-center justify-around border-blue-400 border-t-4 py-2'>

        <div className='flex items-center gap-2'>
          <Label className='font-semibold'>Sucursal:</Label>
          <Input
            type='search'
            value={search}
            onChange={e => setSearch(e.target.value)} placeholder='3984** | Punto 25 ****'
          />
        </div>

        <div className='flex items-center gap-2'>
          <Label className='font-semibold'>N° Sucursales:</Label>
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
                  <button
                    onClick={() => navigate(`/Sucursal/${sucursal.CODIGO}`)}
                    className='bg-yellow-200 rounded-md px-2 py-1 hover:bg-green-200'
                    title='Editar sucursal'
                  >
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