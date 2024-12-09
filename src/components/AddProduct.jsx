import React from 'react'


const AddProduct = () => {
  return (
    <div>

    <div>
      <label>name </label> <br />
      <input type="text" placeholder='enter name product' />
    </div>
    <div>
      <label>image </label> <br />
      <input type="file"  />
    </div>
    <div>
      <label>Price </label> <br />
      <input type="number" placeholder='enter price product' />
    </div>
    <div>
      <label>Category </label> <br />
      <input type="text" placeholder='enter category product' />
    </div>
    <div>
      <label>countInStock </label> <br />
      <input type="number" placeholder='enter number ' />
    </div>


    <div>
        <button type="submit">  Register  </button>
    </div>


    </div>
  )
}

export default AddProduct
