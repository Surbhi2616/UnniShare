import React, { useRef } from 'react'
import './Testimonial.css'
import next from '../assets/next-icon.png'
import back from '../assets/back-icon.png'
import user_1 from '../assets/user-1.png'
import user_2 from '../assets/user-2.png'
import user_3 from '../assets/user-3.png'
import user_4 from '../assets/user-4.png'


const Testimonial = () => {

  const slider = useRef();
  let tx = 0;

  const slideForward = () =>{
    if(tx>-50){
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  const slideBackward = () =>{
    if(tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
  }

  return (
    <div className='testimonial'>
        <img src={next} alt=""  className='next-btn' onClick={slideForward}/>
        <img src={back} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
          <ul ref={slider}>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_1} alt="" />
                  <div>
                    <h3>Priya </h3>
                    <span>Media Student</span>
                  </div>
                  <p>I borrowed a DSLR camera for my media project and saved a ton of money. The process was super easy!</p>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_2} alt="" />
                  <div>
                    <h3>William </h3>
                    <span>Sports</span>
                  </div>
                  <p>I rented a set of weights for my hostel gym sessions. Affordable and hassle-free — highly recommend!</p>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_3} alt="" />
                  <div>
                    <h3>Sanskriti </h3>
                    <span>Engineering</span>
                  </div>
                  <p>Finally, a way to get the books I need without buying them! UnniShare is a lifesaver during exams.</p>
                </div>
              </div>
            </li>
            <li>
              <div className="slide">
                <div className="user-info">
                  <img src={user_4} alt="" />
                  <div>
                    <h3>Satam </h3>
                    <span>Music Major</span>
                  </div>
                  <p>I listed my guitar for rent and ended up making some extra pocket money. Win-win for everyone!</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Testimonial
