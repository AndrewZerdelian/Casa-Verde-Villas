import React from 'react'
import secondphoto from "../images/transparent photos/test1.png"
export default function WhoWeAre() {

  return (

    
    <div className='mt-12
    ' id='WhoWeAre'>
    <h1 className='font-bold text-2xl text-center mb-5'> WHO WE ARE ? </h1>

    <div className='xl:grid xl:grid-cols-2 xl:items-center xl:gap-20 xl:p-10'>

    
    <p className='font-bold text-center'>
    Casa Verde A Legacy of Excellence in Construction <br/>
    For over 50 years, Casa Verde has forged exceptional spaces, delivering 15 standout projects that redefine modern living. As a conglomerate of 9 construction companies united under the Casa Verde umbrella, our legacy of excellence is unparalleled. Casa Verde Villas, our latest triumph, stands as one testament to our commitment to creating harmonious, sustainable havens. Welcome to our legacy, where dreams and quality unite.
    </p>
    <img src={secondphoto} alt='a house '/>
    </div>
    </div>
  )
}
