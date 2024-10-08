import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card } from '@tremor/react'
import { CarProduct } from '../components/iu/CarProduct'

const PuntoDetail = (): JSX.Element => {
  const { codigo } = useParams<{ codigo: string }>()

  const [data, setData] = useState<Record<string, any> | null>(null) // Cambia el tipo según la estructura de tu data

  console.log(codigo)

  useEffect(() => {
    if (codigo == null) return

    axios.get(`http://localhost:3000/api/metaspdv/${codigo}`)
      .then(res => {
        setData(res.data)
        console.log('first', res.data)
      })
      .catch(err => {
        console.error('Error en getRecaudo', err)
      })
  }, [codigo])

  return (
    <Card className="grid lg:grid-cols-4 2xl:grid-cols-4 gap-4 px-2 ">
      {
        data !== null
          ? (
            <>
              {
                Object.entries(data).map(([nombre, venta]) => (
                    // eslint-disable-next-line react/jsx-key
                    <CarProduct nombre={nombre} venta={venta} />
                ))
              }
            </>
            )
          : (
            <h1 className="font-medium text-center text-gray-700">Cargando...</h1>
            )
      }
    </Card>
  )
}

export default PuntoDetail
