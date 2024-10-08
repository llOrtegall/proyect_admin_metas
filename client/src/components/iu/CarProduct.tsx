import { Card, Title } from '@tremor/react'

interface Props {
  nombre: string
  venta: string
}

export function CarProduct ({ nombre, venta }: Props): JSX.Element {
  return (
    <Card decoration="top" decorationColor="indigo" >
      <Title className="text-center">{nombre}</Title>
      <Title className="lg:text-lg text-center ">
       {(venta)}
      </Title>
    </Card>
  )
}
