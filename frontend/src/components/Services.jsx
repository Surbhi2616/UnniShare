import React from 'react'
import './Services.css'
import service_1 from '../assets/img3.png'
import service_2 from '../assets/img4.png'
import service_3 from '../assets/img5.png'


const Services = () => {
  return (
    <div className='services'>
      <div className='service'>
        <img src={service_1} alt="" />
        <div className="caption">
            <h1>Camera</h1>
            <p>Rent everything thing from a camera to tripod</p>
        </div>
      </div>
      <div className='service'>
        <img src={service_2} alt="" />
        <div className="caption">
            <h1>Books</h1>
            <p>From Textbooks to novels, all at student- friendly rates</p>
        </div>
      </div>
      <div className='service'>
        <img src={service_3} alt="" />
        <div className="caption">
            <h1>Sports Gears</h1>
            <p>Find equipment for any sports, ready to rent</p>
        </div>
      </div>
    </div>
  )
}

export default Services
