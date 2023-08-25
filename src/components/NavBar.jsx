import React from 'react'
import { Link } from 'react-scroll'


export default function NavBar() {

  return (
    <nav className=' bg-[#2B4162] h-24 lg:h-20 lg:flex lg:justify-between lg:items-center lg:px-5 '>

    <h1 className='font-bold text-4xl text-green-500 text-center'>
    Casa Verde Villas</h1>

    <div className='text-white font-bold flex justify-between pt-3 px-1 underline-offset-8  lg:gap-20 hover:cursor-pointer ' >
    
    <Link to="OurProject" spy={true} smooth={true} offset={-50} duration={1500} className='hover:text-white duration-500 hover:underline hover:underline-offset-4'>our Project</Link>
    <Link to="WhoWeAre" spy={true} smooth={true} offset={-50} duration={1500} className='hover:text-white duration-500 hover:underline hover:underline-offset-4'>Who we are</Link>
    <Link to="Availability" spy={true} smooth={true} offset={-50} duration={1500} className='hover:text-white duration-500 hover:underline hover:underline-offset-4'>Availability</Link>
    <Link to="Footer" spy={true} smooth={true} offset={50} duration={1500} className='hover:text-white duration-500 hover:underline hover:underline-offset-4'>Contact Us</Link>
    </div>

  </nav>



  )
}
