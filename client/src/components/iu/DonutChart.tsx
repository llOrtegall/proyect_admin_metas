import { DonutChart } from '@tremor/react'
import { type Product } from '../../types/metas'

export function DonutChartComp({ products }: { products: Product[] }) {

  console.log(products);

  return (
    <>
      {
        products && (
          <DonutChart
            className="w-80 h-80"
            variant='donut'
            data={products}
            category="vta_dia"
            index="producto"
            valueFormatter={(number: number) => `Suma Total: $ ${new Intl.NumberFormat('es-CO').format(number)}`}
            colors={['rose', 'indigo', 'emerald', 'sky', 'teal', 'purple', 'yellow', 'red', 'blue', 'green', 'pink', 'purple', 'yellow']}
          />
        )
      }
    </>
  )
}
