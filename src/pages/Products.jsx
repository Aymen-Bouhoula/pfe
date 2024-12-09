import React, { useEffect, useState } from 'react'
import httpClient from '../services/httpClient'
import ProductDetails from '../components/ProductDetails'



const Products = () => {
  const [data, setdata] = useState([])

async function getData() {
  const response = await httpClient.get('/products')
  setdata(response.data)
}


useEffect(() => {
getData()
},[])



  return (
    <div className='row'>
      {data.map((product)=>{
        return <ProductDetails product={product}/>
      })}
    </div>
  )
}

export default Products
