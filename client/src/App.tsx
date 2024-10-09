import { DonutChart } from "./components/DonutChart"

const chartdata = [
  {
    name: "SolarCells",
    amount: 4890,
  },
  {
    name: "Glass",
    amount: 2103,
  },
  {
    name: "JunctionBox",
    amount: 2050,
  },
  {
    name: "Adhesive",
    amount: 1300,
  },
  {
    name: "BackSheet",
    amount: 1100,
  },
  {
    name: "Frame",
    amount: 700,
  },
  {
    name: "Encapsulant",
    amount: 200,
  },
]

function App() {
  return (
    <section className='h-screen w-screen flex items-center justify-center'>
      <DonutChart className="w-96 h-96" data={chartdata} category="name" value="amount" showLabel={true}
        valueFormatter={(number: number) => `$${Intl.NumberFormat("us").format(number).toString()}`}
      />
    </section>
  )
}

export default App
