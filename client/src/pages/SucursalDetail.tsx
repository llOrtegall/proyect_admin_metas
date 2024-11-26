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
<div className="bg-white p-6 rounded-lg shadow-lg">
  <h1 className="text-2xl font-bold mb-4">{sucursal?.NOMBRE}</h1>
  <div className="grid grid-cols-2 gap-4">
    <p className="text-gray-700"><span className="font-semibold">Zona:</span> {sucursal?.ZONA}</p>
    <p className="text-gray-700"><span className="font-semibold">Centro de Costo:</span> {sucursal?.CCOSTO}</p>
    <p className="text-gray-700"><span className="font-semibold">Código:</span> {sucursal?.CODIGO}</p>
    <p className="text-gray-700"><span className="font-semibold">Nombre:</span> {sucursal?.NOMBRE}</p>
    <p className="text-gray-700"><span className="font-semibold">Dirección:</span> {sucursal?.DIRECCION}</p>
    <p className="text-gray-700"><span className="font-semibold">Tipo:</span> {sucursal?.TIPO}</p>
    <p className="text-gray-700"><span className="font-semibold">Dispositivo:</span> {sucursal?.DISPOSITIVO}</p>
    <p className="text-gray-700"><span className="font-semibold">Supervisor:</span> {sucursal?.SUPERVISOR}</p>
    <p className="text-gray-700"><span className="font-semibold">Canal:</span> {sucursal?.CANAL}</p>
    <p className="text-gray-700"><span className="font-semibold">Categoría:</span> {sucursal?.CATEGORIA}</p>
    <p className="text-gray-700"><span className="font-semibold">Hora de Entrada:</span> {sucursal?.HORA_ENTRADA}</p>
    <p className="text-gray-700"><span className="font-semibold">Hora de Salida:</span> {sucursal?.HORA_SALIDA}</p>
    <p className="text-gray-700"><span className="font-semibold">Hora de Entrada Festivos:</span> {sucursal?.HORA_ENTRADA_FES}</p>
    <p className="text-gray-700"><span className="font-semibold">Hora de Salida Festivos:</span> {sucursal?.HORA_SALIDA_FES}</p>
    <p className="text-gray-700"><span className="font-semibold">Subzona:</span> {sucursal?.SUBZONA}</p>
    <p className="text-gray-700"><span className="font-semibold">Célula:</span> {sucursal?.CELULA}</p>
    <p className="text-gray-700"><span className="font-semibold">Horas Ordinarias:</span> {sucursal?.HORAS_ORDINARIAS}</p>
    <p className="text-gray-700"><span className="font-semibold">Horas Festivas:</span> {sucursal?.HORAS_FESTIVAS}</p>
    <p className="text-gray-700"><span className="font-semibold">Estado:</span> {sucursal?.ESTADO}</p>
  </div>
</div>
  )
}