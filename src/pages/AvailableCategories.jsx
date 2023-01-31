import React from 'react';
import Navbar from '../components/Navbar';
import './availableCategories.css';
import { Categories } from '../config/availableCategories';
import Card from '../components/Card';



function AvailableCategories() {

  return (
    <div>
        <Navbar />

      <div className='available-categories'>
        <h3>Categories Available</h3>

        <div className='all-categories'>
          {Categories.map((ele)=> {
            return(
                <Card key = {ele.id} img={ele.img} name={ele.name} />
            )
          })}
        </div>
        </div>
    </div>
  )
}

export default AvailableCategories