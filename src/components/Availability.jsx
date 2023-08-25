import React from 'react'
import VillaLogo from '../images/Group-20.png'
import KeyLogo from '../images/Group-17.png'
import Dollar from '../images/Dollar.png'
export default function Availability() {


  return (


    <div id='Availability'>

    <h1 className='font-bold text-center mt-20 text-3xl'>Availability</h1>
    
    <div className=' mt-20 flex justify-around text-center items-center font-bold'>

    <div >
    <img src={VillaLogo} alt='blabla' className='mx-auto w-60 '/>
    <h1 >Our units range from </h1>
    <p>250 square meters to 600 square meters</p>
    </div>

    <div >
    <img src={KeyLogo}  alt='blabla' className='mx-auto w-60 '/>
    <h1> Ready to move Units </h1>
    <p> Installments plans up to 7 years </p>
    </div>

    </div>

    <div>
    <img src={Dollar} alt='Dollar Sigen' className=' mt-12 mb-5 w-32 mx-auto' />
    <h1 className=' text-center font-bold'>Starting Price at 320,000$ <br/>15% Discount on Cash</h1>

    </div>
    </div>


  )
}
