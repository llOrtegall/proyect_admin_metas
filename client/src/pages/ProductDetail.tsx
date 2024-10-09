import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Product {
  codigo: number;
  venta: number;
  Sucursal: {
    nombre: string;
    direccion: string;
    categoria: string;
    version: string;
  }
}

function ProductDetail () {
  const { name } = useParams();
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    axios.get(`/product/${name}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [name]);  

  return (
    <section className='flex flex-col gap-1 text-black'>
      
    </section>
  )
}

export default ProductDetail;
