import React from 'react'

function Right() {
  return (
    <div className='right_buy'>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" />
        <div className="cost_right">
            <p>Your order is eligible for FREE delivery.</p> <br/>
            <span>select this option at checkout. Details</span>
            <h3>subtotal (1 items): <span style={{fontWeight:700}}>1234</span></h3>
            <button className='rightbuy_btn'>Proceed to Buy</button>
            <div className="emi">
                Emi avaliable
            </div>
        </div>
    </div>
  )
}

export default Right