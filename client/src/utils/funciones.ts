import { type Color } from '@tremor/react'

export function DeterminarColor (porcentaje: number): Color {
  if (porcentaje < 50) {
    return 'red'
  } else if (porcentaje >= 50 && porcentaje < 85) {
    return 'yellow'
  } else if (porcentaje >= 85 && porcentaje < 100) {
    return 'cyan'
  } else {
    return 'green'
  }
}
