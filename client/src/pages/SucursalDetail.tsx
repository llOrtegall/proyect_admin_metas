import { SelectSupervisor, SelectCanal, SelectCelula, SelectEstado, SelectSubzona } from '../components/SelectsDetailSucursal'
import { SucursalPowerBi, HoraDispoSucursal } from '../types/interfaces'
import { URL_API_DATA } from '../utils/constants'
import { useParams } from 'react-router-dom'
import { Badge } from '../components/Badge'
import { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { toast } from 'sonner'
import axios from 'axios'


export default function SucursalDetail() {
  const { codigo } = useParams<{ codigo: string }>()

  const [sucursal, setSucursal] = useState<SucursalPowerBi | undefined>(undefined)
  const [horaDispo, setHoraDispo] = useState<HoraDispoSucursal[]>([])

  const [reload, setReload] = useState(false)

  useEffect(() => {
    axios.get(`${URL_API_DATA}/sucursalPB/${codigo}`)
      .then(res => {
        setSucursal(res.data.sucursal)
        setHoraDispo(res.data.horaDispo)
      })
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

    axios.post(`${URL_API_DATA}/editarSucursalPB`, { ...data, CODIGO: codigo })
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
        <p className='text-gray-700'>Centro de Costo: <Badge variant='warning'>{sucursal?.CCOSTO}</Badge> </p>
        <p className='text-gray-700'>Dirección: <Badge variant='warning'>{sucursal?.DIRECCION}</Badge></p>
        <p className='text-gray-700'>Supervisor: <Badge variant='warning'>{sucursal?.SUPERVISOR}</Badge></p>
        <p className='text-gray-700'>Subzona: <Badge variant='warning'>{sucursal?.SUBZONA}</Badge></p>
        <p className='text-gray-700'>Célula: <Badge variant='warning'>{sucursal?.CELULA}</Badge></p>
        <p className='text-gray-700'>Dispositivo: <Badge variant='warning'>{sucursal?.DISPOSITIVO}</Badge></p>
        <p className='text-gray-700'>Tipo: <Badge variant='warning'>{sucursal?.TIPO}</Badge></p>
        <p className='text-gray-700'>Canal: <Badge variant='warning'>{sucursal?.CANAL}</Badge></p>
        <p className='text-gray-700'>Categoría: <Badge variant='warning'>{sucursal?.CATEGORIA}</Badge></p>
        <p className='text-gray-700'>Estado: <Badge variant='warning'>{sucursal?.ESTADO}</Badge></p>
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

      <Card className='border-t-4 border-blue-500'>
        <table className='w-full'>
          <thead>
            <tr className='bg-blue-500 text-white'>
              <th className='p-2'>Hábil</th>
              <th className='p-2'>Festivo</th>
              <th className='p-2'>Hora</th>
            </tr>
          </thead>
          <tbody>
            {
              horaDispo.map((hora, index) => (
                <tr key={index} className='text-center'>
                  <td className='p-2 text-black'>{hora.HABIL}</td>
                  <td className='p-2 text-black'>{hora.FESTIVO}</td>
                  <td className='p-2 text-black'>{hora.HORADISPO}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </Card>

    </section>
  )
}