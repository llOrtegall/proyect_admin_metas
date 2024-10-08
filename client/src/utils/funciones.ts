import { type ProgressBarProps } from '@tremor/react'

export function DeterminarColor (porcentaje: number): ProgressBarProps['color'] {
  if (porcentaje < 20) return 'red'
  if (porcentaje < 40) return 'orange'
  if (porcentaje < 89) return 'yellow'
  if (porcentaje < 99) return 'cyan'
  return 'green'
}
