import { DonutChart, Legend } from '@tremor/react'
import { type Product } from '../../types/metas'

export function DonutChartComp({ products }: { products: Product[] }) {

  console.log(products);

  return (
    <>
      {
        products && (
          <DonutChart
            variant='donut'
            data={products}
            category="vta_dia"
            index="producto"
            valueFormatter={value => value.toLocaleString()}
            colors={['rose-400', 'indigo', 'emerald', 'sky', 'teal', 'purple', 'yellow', 'red', 'blue', 'green', 'pink', 'purple', 'yellow']}
            className="w-72 h-72"
          />
        )
      }
    </>
  )
}
