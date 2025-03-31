import { SugeridosInterface } from '../../types/Sugeridos'
import { utils, ColInfo, writeFile } from 'xlsx'
import { toast } from 'sonner'

const generateExcelData = (datos: SugeridosInterface[]) => {
  const titulo = [{ A: 'Reporte Sugeridos' }]
  const headers = [
    {
      A: 'ID',
      B: 'Documento',
      C: 'Nombres',
      D: 'Sucursal',
      E: 'Nombre Sucursal',
      F: 'Categoría',
      G: 'Producto',
      H: 'Valor Sugerido',
      I: 'Valor Meta',
      J: 'Estado'
    }
  ]

  const rows = datos.map( sugerido => ({
    A: sugerido.ID,
    B: sugerido.DOCUMENTO,
    C: sugerido.NOMBRES,
    D: sugerido.SUCURSAL,
    E: sugerido.NOMBRE_SUCURSAL,
    F: sugerido.CATEGORIA,
    G: sugerido.PRODUCTO,
    H: sugerido.VALOR_SUGERIDO,
    I: sugerido.VALOR_META,
    J: sugerido.ESTADO
  }))

  return [...titulo, ...headers, ...rows]
}

const createExcelFile = (datos: SugeridosInterface[]) => {
  const Informacion = generateExcelData(datos)

  const libro = utils.book_new()
  const hoja = utils.json_to_sheet(Informacion, { skipHeader: true })

  hoja['!merges'] = [{ s: { r: 0, c: 0 }, e: { r: 0, c: 6 } }]

  const colWidths: ColInfo[] = [
    { width: 10 }, { width: 10 }, { width: 30 }, { width: 10 }, { width: 20 },
    { width: 10 }, { width: 10 }, { width: 20 }, { width: 10 }, { width: 10 },
    { width: 10 }, { width: 10 }, { width: 10 }, { width: 10 }, { width: 10 },
    { width: 10 }, { width: 10 }
  ]

  hoja['!cols'] = colWidths
  utils.book_append_sheet(libro, hoja, 'Sugeridos')
  writeFile(libro, 'ReporteSugeridos.xlsx')
}

export const ButtonExportSugeridos = ({ datos }: { datos: SugeridosInterface[] }): JSX.Element => {
  const handleDownload = (): void => {

    const promises = new Promise((resolve) => {
      setTimeout(() => {
        resolve({ name: 'sonner' })
      }, 3000)
    })

    toast.promise(promises, {
      loading: 'Generando Archivo ...',
      description: 'Espere un momento',
      style: { background: '#fcd34d' },
      success: () => {
        createExcelFile(datos)
        return 'Archivo Generado Correctamente'
      },
      error: 'Error al Generar Archivo'
    })
  }

  return (
    <button className='bg-green-600 px-4 py-2 rounded-md text-white hover:bg-green-500 text-xs 2xl:text-sm 3xl:text-base' onClick={handleDownload}>
      Export Excel
    </button>
  )
}