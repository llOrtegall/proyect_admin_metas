import { DeterminarColor } from '../../utils/funciones'
import { Card, ProgressCircle, Title } from '@tremor/react'

interface Props {
  nombre: string
  venta: number
  porcentaje: number
}

export function CardMetas ({ nombre, venta, porcentaje }: Props): JSX.Element {
  return (
    <Card decoration="top" decorationColor={DeterminarColor(porcentaje)} >
      <Title className="text-center">{nombre}</Title>
      <Title className="lg:text-lg text-center ">
        {nombre === 'GIROS' ? '#' : nombre === 'RECAUDOS' ? '#' : '$'} {new Intl.NumberFormat('en-ES').format(venta)}
      </Title>
      <ProgressCircle className='py-2' size="lg" value={porcentaje} color={DeterminarColor(porcentaje)}>
        <Title className="lg:text-sm">{porcentaje}%</Title>
      </ProgressCircle>
    </Card>
  )
}
