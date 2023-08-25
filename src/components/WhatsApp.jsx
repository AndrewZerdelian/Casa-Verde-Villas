import React from 'react';
import whatsapp from '../images/WhatsApp.png'

export default function WhatsApp() {


return (

<div className='grid grid-row-2 text-center mt-28 font-bold text-xl
xl:flex xl:justify-center xl:items-center'>

    <p>Have questions or need assistance? <br/>Just click the WhatsApp icon to start a chat with us.</p>
    <a href="https://api.whatsapp.com/send?phone=012345678912" target="_blank" rel="noopener noreferrer">
    <img src={whatsapp} alt="WhatsApp Icon" className="
    mx-auto mt-5 h-52 hover:shadow-2xl rounded-full hover:scale-75 duration-300" />
    </a>
    
</div>

)
}



