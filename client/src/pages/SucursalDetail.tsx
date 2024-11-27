import { SelectSupervisor, SelectCanal, SelectCelula, SelectEstado, SelectSubzona } from '../components/SelectsDetailSucursal'
import { SucursalPowerBi } from '../types/interfaces'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import axios from 'axios'
import { Card } from '../components/Card'
import { Badge } from '../components/Badge'


export default function SucursalDetail() {
  const { codigo } = useParams<{ codigo: string }>()

  const [sucursal, setSucursal] = useState<SucursalPowerBi | undefined>(undefined)

  const [reload, setReload] = useState(false)

  useEffect(() => {
    axios.get(`/sucursalPB/${codigo}`)
      .then(res => setSucursal(res.data))
      .catch(err => console.log(err))
  }, [codigo, reload])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSucursal({
      ...sucursal!,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const data = Object.fromEntries(formData.entries())

    axios.post('/editarSucursalPB', { ...data, CODIGO: codigo })
      .then(res => {
        if (res.status === 200) {
          console.log(res.data)
          toast.success('Actualizada correctamente', { description: 'Los cambios se han guardado' })
          setReload(!reload)
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <section className='space-y-1 px-1 py-1'>

      <Card className='flex justify-around border-t-4 border-blue-500'>
        <p className='text-gray-700 font-semibold'>
          Sucursal:
          <Badge variant='warning'>
            {sucursal?.CODIGO}
          </Badge>
        </p>
        <p className='text-gray-700 font-semibold'>
          Nombre Sucursal:
          <Badge variant='warning'>
            {sucursal?.NOMBRE}
          </Badge>
        </p>
        <p className='text-gray-700 font-semibold'>
          Empresa:
          <Badge variant='warning'>
            {sucursal?.ZONA === '39627' ? 'Multired' : 'Servired'}
          </Badge>
        </p>
      </Card >

      <Card className='border-t-4 border-blue-500 grid grid-cols-2 gap-1'>
        <p className='text-gray-700'><span className='font-semibold'>Centro de Costo:</span> {sucursal?.CCOSTO}</p>
        <p className='text-gray-700'><span className='font-semibold'>Dirección:</span> {sucursal?.DIRECCION}</p>
        <p className='text-gray-700'><span className='font-semibold'>Supervisor:</span> {sucursal?.SUPERVISOR}</p>
        <p className='text-gray-700'><span className='font-semibold'>Subzona:</span> {sucursal?.SUBZONA}</p>
        <p className='text-gray-700'><span className='font-semibold'>Célula:</span> {sucursal?.CELULA}</p>
        <p className='text-gray-700'><span className='font-semibold'>Dispositivo:</span> {sucursal?.DISPOSITIVO}</p>
        <p className='text-gray-700'><span className='font-semibold'>Tipo:</span> {sucursal?.TIPO}</p>
        <p className='text-gray-700'><span className='font-semibold'>Canal:</span> {sucursal?.CANAL}</p>
        <p className='text-gray-700'><span className='font-semibold'>Categoría:</span> {sucursal?.CATEGORIA}</p>
        <p className='text-gray-700'><span className='font-semibold'>Estado:</span> {sucursal?.ESTADO}</p>
      </Card>

      <Card className='flex justify-around border-t-4 border-blue-500'>
        <form onSubmit={handleSubmit} className='bg-blue-100 px-12 py-6 grid grid-cols-4 gap-4 rounded-md'>
          <SelectSupervisor
            key='SUPERVISOR_01'
            seleccionado={sucursal?.SUPERVISOR}
            funSelect={(e) => setSucursal({ ...sucursal!, SUPERVISOR: e })}
          />

          <SelectCanal
            key='CANAL_01'
            seleccionado={sucursal?.CANAL}
            funSelect={(e) => setSucursal({ ...sucursal!, CANAL: e })}
          />

          <div className='flex flex-col space-y-2 justify-center'>
            <label className='text-gray-700 text-sm'>Hora de Entrada:</label>
            <input
              type='time'
              name='HORA_ENTRADA'
              value={sucursal?.HORA_ENTRADA}
              onChange={handleChange}
              className='border p-1 rounded-md text-gray-700'
            />
          </div>

          <div className='flex flex-col space-y-2 justify-center'>
            <label className='text-gray-700 text-sm'>Hora de Salida:</label>
            <input
              type='time'
              name='HORA_SALIDA'
              value={sucursal?.HORA_SALIDA}
              onChange={handleChange}
              className='border p-1 rounded-md text-gray-700'
            />
          </div>

          <div className='flex flex-col space-y-2 justify-center'>
            <label className='text-gray-700 text-sm'>Hora de Entrada Festivos:</label>
            <input
              type='time'
              name='HORA_ENTRADA_FES'
              value={sucursal?.HORA_ENTRADA_FES}
              onChange={handleChange}
              className='border p-1 rounded-md text-gray-700'
            />
          </div>

          <div className='flex flex-col space-y-2 justify-center'>
            <label className='text-gray-700 text-sm'>Hora de Salida Festivos:</label>
            <input
              type='time'
              name='HORA_SALIDA_FES'
              value={sucursal?.HORA_SALIDA_FES}
              onChange={handleChange}
              className='border p-1 rounded-md text-gray-700'
            />
          </div>

          <SelectSubzona
            key='SUBZONA_01'
            seleccionado={sucursal?.SUBZONA}
            funSelect={(e) => setSucursal({ ...sucursal!, SUBZONA: e })}
          />

          <SelectCelula
            key='CELULA_01'
            seleccionado={sucursal?.CELULA}
            funSelect={(e) => setSucursal({ ...sucursal!, CELULA: e })}
          />

          <div className='flex flex-col space-y-2 justify-center'>
            <label className='text-gray-700 text-sm'>Horas Ordinarias:</label>
            <input
              type='text'
              name='HORAS_ORDINARIAS'
              value={sucursal?.HORAS_ORDINARIAS}
              onChange={handleChange}
              className='border p-1 rounded-md text-gray-700'
            />
          </div>

          <div className='flex flex-col space-y-2 justify-center'>
            <label className='text-gray-700 text-sm'>Horas Festivas:</label>
            <input
              type='text'
              name='HORAS_FESTIVAS'
              value={sucursal?.HORAS_FESTIVAS}
              onChange={handleChange}
              className='border p-1 rounded-md text-gray-700'
            />
          </div>

          <SelectEstado
            key='ESTADO_01'
            seleccionado={sucursal?.ESTADO}
            funSelect={(e) => setSucursal({ ...sucursal!, ESTADO: e })}
          />

          <div className='flex flex-col space-y-2 justify-center'>
            <label className='text-gray-700 text-sm'>Confirmar Cambios:</label>
            <button type='submit' className='bg-blue-500 text-white p-2 rounded-md '>
              Actualizar
            </button>
          </div>
        </form>
      </Card>

    </section>
  )
}