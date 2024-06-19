import React from 'react'
import Gridcard from './Gridcard'
import './groupcard.css';
import { cardproducts } from './productdata';

function Groupcard() {
  return (
    <div className='grp-gridcard-container'>
        {cardproducts.map((e) => {
            return (
                <Gridcard 
                    head={e.head} 
                    img1 = {e.image1}
                    img2 = {e.image2}
                    img3 = {e.image3}
                    img4 = {e.image4}
                    name1 = {e.name1}
                    name2 = {e.name2}
                    name3 = {e.name3}
                    name4 = {e.name4}
                />
            )
        })}
    </div>
  )
}

export default Groupcard