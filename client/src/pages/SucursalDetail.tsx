import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/Select'
import { SucursalPowerBi } from '../types/interfaces'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Label } from '../components/Label'
import { toast } from 'sonner'
import axios from 'axios'

const dataSelect = [
  { label: 'ZONA CUMBRE', value: 'ZONA CUMBRE' },
  { label: 'ZONA 1', value: 'ZONA 1' },
  { label: 'ZONA 2', value: 'ZONA 2' },
  { label: 'ZONA VIJES', value: 'ZONA VIJES' },
]

const dataSelectCanal = [
  { label: 'TAT', value: 'TAT' },
  { label: 'INDEPENDIENTE PUNTO', value: 'INDEPENDIENTE PUNTO' },
  { label: 'INDEPENDIENTE MOVIL', value: 'INDEPENDIENTE MOVIL' },
  { label: 'NOMINA PUNTO', value: 'NOMINA PUNTO' },
  { label: 'CAJAS', value: 'CAJAS' },
  { label: 'MOVIL INDEPENDIENTE', value: 'MOVIL INDEPENDIENTE' },
  { label: 'PARADERO', value: 'PARADERO' },
  { label: 'APP', value: 'APP' },
  { label: 'NOMINA MOVIL', value: 'NOMINA MOVIL' },
]

const dataSelectCelula = [
  { label: 'BITACO', value: 'BITACO' },
  { label: 'PAVAS', value: 'PAVAS' },
  { label: 'CENTRO', value: 'CENTRO' },
  { label: 'LOMITAS', value: 'LOMITAS' },
  { label: 'ALFAGUARA', value: 'ALFAGUARA' },
  { label: 'ORIENTE', value: 'ORIENTE' },
  { label: 'OCCIDENTE', value: 'OCCIDENTE' },
  { label: 'NORTE', value: 'NORTE' },
  { label: 'BONANZA', value: 'BONANZA' },
  { label: 'TERRANOVA', value: 'TERRANOVA' },
  { label: 'VILLAPAZ', value: 'VILLAPAZ' },
  { label: 'VENTURA', value: 'VENTURA' },
  { label: 'POTRERITO', value: 'POTRERITO' },
  { label: 'SAN ANTONIO', value: 'SAN ANTONIO' },
  { label: 'ROBLES', value: 'ROBLES' },
  { label: 'TIMBA', value: 'TIMBA' },
  { label: 'ROBLES NUEVO', value: 'ROBLES NUEVO' },
  { label: 'QUINAMAYO', value: 'QUINAMAYO' },
  { label: 'PASO DE LA BOLSA', value: 'PASO DE LA BOLSA' },
  { label: 'SUR', value: 'SUR' },
  { label: 'SAN MARCOS', value: 'SAN MARCOS' },
  { label: 'DAPA', value: 'DAPA' },
  { label: 'MULALO', value: 'MULALO' },
  { label: 'MARBELLA', value: 'MARBELLA' },
  { label: 'SANTAINES', value: 'SANTAINES' },
]

const dataSelectSubzona = [
  { label: 'RURAL', value: 'RURAL' },
  { label: 'CABECERA MUNICIPAL', value: 'CABECERA MUNICIPAL' },
  { label: 'INDUSTRIAL', value: 'INDUSTRIAL' },
  { label: 'ESTANCIA', value: 'ESTANCIA' },
  { label: 'AMERICAS', value: 'AMERICAS' },
]

const dataSelectEstado = [
  { label: 'Activo', value: 'A' },
  { label: 'Inactivo', value: 'I' },
]

const SeleSupervisor =( { seleccionado, funSelect }: { seleccionado?: string, funSelect: (e: string) => void } ) => {
  return (
    <>
      <Label htmlFor='SUPERVISOR'>Supervisor</Label>
      <Select name='SUPERVISOR' value={seleccionado} onValueChange={funSelect}>
        <SelectTrigger className='mt-2'>
          <SelectValue placeholder={'Seleccionar'} />
        </SelectTrigger>
        <SelectContent>
          {dataSelect.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
};

SeleSupervisor.displayName = 'SeleSupervisor'

const SelectCanal = ( { seleccionado, funSelect }: { seleccionado?: string, funSelect: (e: string) => void } ) => {
  return (
    <>
      <Label htmlFor='CANAL'>Canal:</Label>
      <Select name='CANAL' value={seleccionado} onValueChange={funSelect}>
        <SelectTrigger className='mt-2'>
          <SelectValue placeholder={'Seleccionar'} />
        </SelectTrigger>
        <SelectContent>
          {dataSelectCanal.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
};

SelectCanal.displayName = 'SelectCanal'

const SelectCelula =( { seleccionado, funSelect }: { seleccionado?: string, funSelect: (e: string) => void } ) => {
  return (
    <>
      <Label htmlFor='CELULA'>Célula:</Label>
      <Select name='CELULA' value={seleccionado} onValueChange={funSelect}>
        <SelectTrigger className='mt-2'>
          <SelectValue placeholder={'Seleccionar'} />
        </SelectTrigger>
        <SelectContent>
          {dataSelectCelula.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
};

SelectCelula.displayName = 'SelectCelula'

const SelectSubzona =( { seleccionado, funSelect }: { seleccionado?: string, funSelect: (e: string) => void }) => {
  return (
    <>
      <Label htmlFor='SUBZONA'>Subzona:</Label>
      <Select name='SUBZONA' value={seleccionado} onValueChange={funSelect}>
        <SelectTrigger className='mt-2'>
          <SelectValue placeholder={'Seleccionar'} />
        </SelectTrigger>
        <SelectContent>
          {dataSelectSubzona.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}

SelectSubzona.displayName = 'SelectSubzona'

const SelectEstado =( { seleccionado, funSelect }: { seleccionado?: string, funSelect: (e: string) => void }) => {
  return (
    <>
      <Label htmlFor='ESTADO'>Estado:</Label>
      <Select name='ESTADO' value={seleccionado} onValueChange={funSelect}>
        <SelectTrigger className='mt-2'>
          <SelectValue placeholder={'Seleccionar'} />
        </SelectTrigger>
        <SelectContent>
          {dataSelectEstado.map((item, index) => (
            <SelectItem key={index} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}

export default function SucursalDetail() {
  const { codigo } = useParams<{ codigo: string }>()

  const [sucursal, setSucursal] = useState<SucursalPowerBi | undefined>(undefined)

  const [reload, setReload] = useState(false)

  useEffect(() => {
    axios.get(`/sucursalPB/${codigo}`)
      .then(res => {
        setSucursal(res.data)
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

    console.log(data);

    axios.post('/editarSucursalPB', { ...data, CODIGO: codigo })
      .then(res => {
        if (res.status === 200) {
          console.log(res.data)
          toast.success('Sucursal actualizada correctamente',)
          setReload(!reload)
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <section>
      <div className='flex justify-around py-4 bg-blue-200'>
        <p className='text-gray-700'><span className='font-semibold'>Código:</span> {sucursal?.CODIGO}</p>
        <p className='text-gray-700'><span className='font-semibold'>Nombre:</span> {sucursal?.NOMBRE}</p>
        <p className='text-gray-700'><span className='font-semibold'>Zona:</span> {sucursal?.ZONA}</p>
      </div>
      <div className='grid grid-cols-2'>
        <div className='p-2 border rounded-md m-1'>
          <p className='text-gray-700'><span className='font-semibold'>Centro de Costo:</span> {sucursal?.CCOSTO}</p>
          <p className='text-gray-700'><span className='font-semibold'>Dirección:</span> {sucursal?.DIRECCION}</p>
          <p className='text-gray-700'><span className='font-semibold'>Supervisor:</span> {sucursal?.SUPERVISOR}</p>
          <p className='text-gray-700'><span className='font-semibold'>Célula:</span> {sucursal?.CELULA}</p>
          <p className='text-gray-700'><span className='font-semibold'>Subzona:</span> {sucursal?.SUBZONA}</p>
        </div>
        <div className='p-2 border rounded-md m-1'>
          <p className='text-gray-700'><span className='font-semibold'>Tipo:</span> {sucursal?.TIPO}</p>
          <p className='text-gray-700'><span className='font-semibold'>Dispositivo:</span> {sucursal?.DISPOSITIVO}</p>
          <p className='text-gray-700'><span className='font-semibold'>Canal:</span> {sucursal?.CANAL}</p>
          <p className='text-gray-700'><span className='font-semibold'>Categoría:</span> {sucursal?.CATEGORIA}</p>
          <p className='text-gray-700'><span className='font-semibold'>Estado:</span> {sucursal?.ESTADO}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='bg-blue-200 p-2 rounded-md m-1 grid grid-cols-4 gap-y-4 gap-x-8'>
        <SeleSupervisor seleccionado={sucursal?.SUPERVISOR} funSelect={(e) => setSucursal({...sucursal!, SUPERVISOR: e})} />

        <SelectCanal seleccionado={sucursal?.CANAL} funSelect={(e) => setSucursal({ ...sucursal!, CANAL: e })} />

        <label className='text-gray-700 font-semibold'>Hora de Entrada:</label>
        <input
          type='time'
          name='HORA_ENTRADA'
          value={sucursal?.HORA_ENTRADA}
          onChange={handleChange}
          className='border p-1 rounded-md text-black'
        />
        <label className='text-gray-700 font-semibold'>Hora de Salida:</label>
        <input
          type='time'
          name='HORA_SALIDA'
          value={sucursal?.HORA_SALIDA}
          onChange={handleChange}
          className='border p-1 rounded-md text-black'
        />
        <label className='text-gray-700 font-semibold'>Hora de Entrada Festivos:</label>
        <input
          type='time'
          name='HORA_ENTRADA_FES'
          value={sucursal?.HORA_ENTRADA_FES}
          onChange={handleChange}
          className='border p-1 rounded-md text-black'
        />
        <label className='text-gray-700 font-semibold'>Hora de Salida Festivos:</label>
        <input
          type='time'
          name='HORA_SALIDA_FES'
          value={sucursal?.HORA_SALIDA_FES}
          onChange={handleChange}
          className='border p-1 rounded-md text-black'
        />
        <SelectSubzona seleccionado={sucursal?.SUBZONA} funSelect={(e) => setSucursal({ ...sucursal!, SUBZONA: e })} />

        <SelectCelula seleccionado={sucursal?.CELULA} funSelect={(e) => setSucursal({ ...sucursal!, CELULA: e })} />

        <label className='text-gray-700 font-semibold'>Horas Ordinarias:</label>
        <input
          type='text'
          name='HORAS_ORDINARIAS'
          value={sucursal?.HORAS_ORDINARIAS}
          onChange={handleChange}
          className='border p-1 rounded-md text-black'
        />
        <label className='text-gray-700 font-semibold'>Horas Festivas:</label>
        <input
          type='text'
          name='HORAS_FESTIVAS'
          value={sucursal?.HORAS_FESTIVAS}
          onChange={handleChange}
          className='border p-1 rounded-md text-black'
        />

        <SelectEstado seleccionado={sucursal?.ESTADO} funSelect={(e) => setSucursal({ ...sucursal!, ESTADO: e })} />

        <button type='submit' className='mt-4 bg-blue-500 text-white p-2 rounded-md'>Actualizar</button>
      </form>
    </section>
  )
}