import { SucursalPowerBi } from '../types/interfaces'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'sonner'

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
        if(res.status === 200){
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
        <label className='text-gray-700 font-semibold'>Supervisor:</label>
        <select className='text-black' name='SUPERVISOR' id='SUPERVISOR' value={ sucursal?.SUPERVISOR} onChange={handleChange}>
          <option value='ZONA CUMBRE'>ZONA CUMBRE</option>
          <option value='ZONA 1'>ZONA 1</option>
          <option value='ZONA 2'>ZONA 2</option>
          <option value='ZONA VIJES'>ZONA VIJES</option>
        </select>

        <label className='text-gray-700 font-semibold'>Canal:</label>
        <select className='text-black' name='CANAL' id='CANAL' value={ sucursal?.CANAL} onChange={handleChange}>
          <option value='TAT'>TAT</option>
          <option value='INDEPENDIENTE PUNTO'>INDEPENDIENTE PUNTO</option>
          <option value='INDEPENDIENTE MOVIL'>INDEPENDIENTE MOVIL</option>
          <option value='NOMINA PUNTO'>NOMINA PUNTO</option>
          <option value='CAJAS'>CAJAS</option>
          <option value='MOVIL INDEPENDIENTE'>MOVIL INDEPENDIENTE</option>
          <option value='PARADERO'>PARADERO</option>
          <option value='APP'>APP</option>
          <option value='NOMINA MOVIL'>NOMINA MOVIL</option>
        </select>
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
        <label className='text-gray-700 font-semibold'>Subzona:</label>
        <select className='text-black' name='SUBZONA' id='SUBZONA' value={ sucursal?.SUBZONA} onChange={handleChange}>
          <option value='RURAL'>RURAL</option>
          <option value='CABECERA MUNICIPAL'>CABECERA MUNICIPAL</option>
          <option value='INDUSTRIAL'>INDUSTRIAL</option>
          <option value='ESTANCIA'>ESTANCIA</option>
          <option value='AMERICAS'>AMERICAS</option>
        </select>
        <label className='text-gray-700 font-semibold'>Célula:</label>
        <select className='text-black' name='CELULA' id='CELULA' value={ sucursal?.CELULA} onChange={handleChange}>
          <option value='BITACO'>BITACO</option>
          <option value='PAVAS'>PAVAS</option>
          <option value='CENTRO'>CENTRO</option>
          <option value='LOMITAS'>LOMITAS</option>
          <option value='ALFAGUARA'>ALFAGUARA</option>
          <option value='ORIENTE'>ORIENTE</option>
          <option value='OCCIDENTE'>OCCIDENTE</option>
          <option value='NORTE'>NORTE</option>
          <option value='BONANZA'>BONANZA</option>
          <option value='TERRANOVA'>TERRANOVA</option>
          <option value='VILLAPAZ'>VILLAPAZ</option>
          <option value='VENTURA'>VENTURA</option>
          <option value='POTRERITO'>POTRERITO</option>
          <option value='SAN ANTONIO'>SAN ANTONIO</option>
          <option value='ROBLES'>ROBLES</option>
          <option value='TIMBA'>TIMBA</option>
          <option value='ROBLES NUEVO'>ROBLES NUEVO</option>
          <option value='QUINAMAYO'>QUINAMAYO</option>
          <option value='PASO DE LA BOLSA'>PASO DE LA BOLSA</option>
          <option value='SUR'>SUR</option>
          <option value='SAN MARCOS'>SAN MARCOS</option>
          <option value='DAPA'>DAPA</option>
          <option value='MULALO'>MULALO</option>
          <option value='MARBELLA'>MARBELLA</option>
          <option value='SANTAINES'>SANTAINES</option>
        </select>
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
        <label className='text-gray-700 font-semibold'>Estado:</label>
        <select className='text-black' name='ESTADO' id='ESTADO' value={ sucursal?.ESTADO} onChange={handleChange}>
          <option value='A'>Activo</option>
          <option value='I'>Inactivo</option>
        </select>
        <button type='submit' className='mt-4 bg-blue-500 text-white p-2 rounded-md'>Actualizar</button>
      </form>
    </section>
  )
}