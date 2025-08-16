import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import {Link} from 'react-scroll'
import {useNavigate} from "react-router-dom"

const Navbar = () => {

  const navigate = useNavigate();

  const [sticky, setSticky] = useState(false);

  useEffect(() => (
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  ),[])

  return (
<nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo'/>
      <ul>
        <li><Link to='rent' smooth={true} offset={0} duration={500} >Home</Link></li>
        <li><Link to='services' smooth={true} offset={-260} duration={500} >Services</Link></li>
        <li><Link to='about' smooth={true} offset={-150} duration={500} >About us</Link></li>
        <li><Link to='testimonial' smooth={true} offset={-260} duration={500} >Testimonial</Link></li>
        <li><Link to='contact-container' smooth={true} offset={-260} duration={500} >Contact</Link></li>

      </ul>
      <div className='btn'>
      <button className='login-btn' onClick={() => navigate("/login")}>Login</button>
      <button className='signin-btn' onClick={() => navigate("/signup")}>Sign In</button>
    </div>
    </nav>
  )
}

export default Navbar
