import React from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import location from '../images/LOGOS/Pinned Location .png'
import Facebook from '../images/LOGOS/Face Book.png'
import Insta from '../images/LOGOS/Insta .png'
import X from '../images/LOGOS/X.png'
import GitHub from '../images/LOGOS/Git Hub.png'



export default function Footer() {
const form = useRef("");

const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3peyfwk', 'template_nhoyj9o', form.current, 'OUctTRLpkc0owK7dN')
    .then((result) => {
        console.log(result.text);
        alert ("Email was sent successfully")
}, (error) => {
        console.log(error.text);
        
    });


};


//flex flex-col justify-center items-center 
return (

    <div className=' bg-gradient-to-r from-[#12100e] to-[#2B4162] text-white pt-20
    text-center lg:grid grid-cols-3' id='Footer'>


    <div >
    <h1 className='font-bold text-2xl mb-10 '>For more enquiries, contact us</h1>
    <form
        ref={form}
        onSubmit={sendEmail}
        className=' gap-6 text-black grid grid-cols-3 '
    >
        <input
        type='Name'
        placeholder='Name...'
        name='user_name'
        className='rounded-2xl w-[80%]  p-3 col-span-3 mx-auto'
        required
        />

        <input
        type='Number'
        placeholder='Mobile Number...'
        name='user_mobile'
        className='rounded-2xl w-[80%] p-3 col-span-3 mx-auto'
        required
        />

        <input
        type='Email'
        placeholder='example@gmail.com'
        name='user_email'
        className='rounded-2xl w-[80%] p-3 col-span-3 mx-auto'
        required
        />

        <textarea
        type='textarea'
        placeholder='Your message...'
        name='message'
        className='rounded-2xl w-[80%] p-10 col-span-3 mx-auto'
        />

        <input type='submit' 
        value='Submit' 
        className='text-white bg-[#2B4060] rounded-3xl col-span-3 w-[60%] mx-auto p-4 mb-10 hover:bg-[#1C222D] duration-300'
        />
    </form>
    </div>




    <div>
    <h1 className='font-bold text-3xl'> OUR LOCATION </h1>
    <p>123 Real Estate Street</p>
    <div >
    <p>Atlanta, United states</p>
    <a href="https://www.google.com/maps/search/?api=1&query=33.433477, -84.615623" target='_blank' rel="noreferrer"
    className=''>
    <img src={location} alt='location' className='w-14 mx-auto pb-2'/>
    </a>
    </div>
    <p>Phone: (123) 456-7890</p>
    <p>Email: Casa_Verde@Casa.com</p>
    </div>




    <div>
    <h1 className='font-bold text-3xl'> Follow us on social media </h1>

    <div className='mt-5 flex mx-auto justify-between gap-5 w-60'>

    <a href='https://www.facebook.com/' target='_blank' className='hover:scale-125 hover:duration-500' rel="noreferrer" >
    <img src={Facebook} alt='facebook' />
    </a>

    <a href='https://www.instagram.com/' target='_blank' className='hover:scale-125 hover:duration-500' rel="noreferrer">
    <img src={Insta} alt='instagram' />
    </a>

    <a href='https://twitter.com/X' target='_blank' className='hover:scale-125 hover:duration-500' rel="noreferrer">
    <img src={X} alt='twitter' />
    </a>

    <a href='https://github.com/AndrewZerdelian' target='_blank' className='hover:scale-125 hover:duration-500' rel="noreferrer">
    <img src={GitHub} alt='twitter' className='rounded' />
    </a>

    </div>
    </div>


    </div>
);
}