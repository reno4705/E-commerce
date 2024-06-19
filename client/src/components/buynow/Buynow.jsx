import { Divider } from '@mui/material';
import React from 'react';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';

function Buynow() {
  return (
    <div className='buynow_section'>
        <div className="buynow_container">
            <div className="left_buy">
                <h1>Shopping Cart</h1>
                <p>Select all items</p>
                <span className='leftbuyprice'>Price</span>
                <Divider/>

                <div className="item_containert">
                    <img src='./m3p10.jpg' />
                    <div className="item_details">
                        <h3>aaaaaaaaaaaaaaaaaa</h3>
                        <h3>bbbbbbbbbbb</h3>
                        <h3 className='diffrentprice'>3211</h3>
                        <p className='unusuall'>ddddddddddddd</p>
                        <p>eeeeeeeeeeeeeeee</p>
                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt=''/>
                        <Option />
                    </div>
                    <h3 className='item_price'>2112</h3>
                </div>
                <Divider />
                <Subtotal />
            </div>
            <Right/>
        </div>
    </div>
  )
}

export default Buynow