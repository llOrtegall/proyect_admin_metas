import { Card, Title } from '@tremor/react'

interface Props {
  nombre: string
  venta: number
}

// TODO: aqui solo recibe un objecto con dos propiedades, nombre y venta
export function CardVentaDia ({ nombre, venta }: Props): JSX.Element {
  return (
    <Card decoration="top" decorationColor={'blue'}>
      <Title className="text-center">{nombre}</Title>
      <p className="text-center font-semibold lg:text-xl">
        $ {new Intl.NumberFormat('en-ES').format(venta)}
      </p>
    </Card>
  )
}
