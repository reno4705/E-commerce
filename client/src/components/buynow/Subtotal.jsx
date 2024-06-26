import React, { useEffect, useState } from 'react'
import './Buynow.css'

function Subtotal({item}) {

  const [price,setPrice] = useState(0);

  useEffect(()=>{
    totalAmount();
  },[item])

  const totalAmount = () => {
    let price = 0;
    item.map((item)=>{
      price = item.price.cost + price;
    })
    setPrice(price);
  }

  return (
    <div className='sub_item'>
        <h3>Subtotal({item.length} items): <strong style={{fontWeight:700,color:"#111"}}>₹{price}.00</strong></h3>
    </div>
  )
}

export default Subtotal