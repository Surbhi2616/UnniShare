import React from 'react'
import './About.css'
import about from '../assets/img7.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about} alt="" className='about-img' />
      </div>
      <div className="about-right">
        <h3>About Us- UnniShare</h3>
        <p>At UnniShare, we believe student life should be simpler, smarter, and more affordable.
            Why spend money buying something you’ll only use for a few hours or days? With UnniShare, you can rent and share anything you need, right on campus — from books and calculators to sports gear and photography equipment.</p>
        <p>We built UnniShare to connect students with each other, making it easy to borrow what you need and lend what you don’t. Whether it’s for an exam, a project, a game, or a hobby, UnniShare makes sure no student is left without the right tools.
        </p>
      </div>
    </div>
  )
}

export default About
