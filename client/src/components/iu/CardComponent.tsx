import { DeterminarColor } from '../../utils/funciones'
import { Card, ProgressBar } from '@tremor/react'

export function CardComponent ({ porcentaje, cumplimiento }: { porcentaje: number, cumplimiento: string }): JSX.Element {
  return (
    <Card decoration="top" decorationColor={DeterminarColor(porcentaje)} className='flex flex-col justify-around'>
      <article className="text-3xl text-center">
        <p>Cumplimiento: <span className='font-semibold'>{cumplimiento}</span></p>
        <p>{porcentaje}%</p>
      </article>
      <ProgressBar className='' value={porcentaje} color={porcentaje > 80 ? 'emerald' : porcentaje > 50 ? 'lime' : 'red' } />
    </Card>
  )
}
