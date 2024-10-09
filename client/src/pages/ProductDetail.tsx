import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail () {
  const { name } = useParams();

  useEffect(() => {
    axios.get(`/product/${name}`)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  }, [name]);


  return (
    <div>
      <h1>Product Detail</h1>
    </div>
  )
}

export default ProductDetail;
