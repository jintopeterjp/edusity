import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onClick={
              ()=>{setPlayState(true)}} />
        </div>
        <div className="about-right">
           <h3>ABOUT UNIVERSITY</h3>
           <h2>Nuturing Tomorrow's Leaders Today</h2>
           <p>Emabark on a transformative educational journey waith our
              university's comprehensive edication programs. Our cutting-edge 
              curriculum is desinded to empower students with the knowledge,
              skills, and experiences needed to excel in the dynamic fild of 
              education.</p>
            <p>With a focus on innovation, hands-on learning, and personalized
              mentorship, our programs prepare aspiring educator to make a 
              meaningful impact in classroooms, schools, and communities.</p>
            <p>Whether you aspire to become a teacher, administratorm
               counselor, or educatuinal leader, our diverse range of ptograms 
               offers the perfect pathway to achive your goals and unlock your 
               full potential in shaping the future of education.</p>
        </div>
      
    </div>
  )
}

export default About
