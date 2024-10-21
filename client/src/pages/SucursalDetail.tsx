import { SucursalPowerBi } from '../types/interfaces'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function SucursalDetail(){
  const [sucursal, setSucursal] = useState<SucursalPowerBi>()

  const example = useParams<{codigo: string}>()
  
  useEffect(() => {
    axios.get(`/sucursalPB/${example.codigo}`)
    .then(res => setSucursal(res.data))
    .catch(err => console.log(err) )
  }, [example])

  return(
    <div className='text-black'>
      <h1 className='text-2xl font-bold'>Detalle de la sucursal</h1>
      <div>
        <h2 className='text-xl font-bold'>Nombre: {sucursal?.NOMBRE}</h2>
        <p>Ubicación: {sucursal?.DIRECCION}</p>
      </div>
    </div>
  )
}