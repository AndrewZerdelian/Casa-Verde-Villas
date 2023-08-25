import React from 'react'
import NavBar from './components/NavBar'
import MainSlider from './components/MainSlider'
import OurProject from './components/OurProject'
import WhatsApp from './components/WhatsApp'
import WhoWeAre from './components/WhoWeAre'
import Availability from './components/Availability'
import ImageSliderComponent from './components/ImageSliderComponent'
import Footer from './components/Footer'

// villas photoes
import photo1 from './images/1.jpg';
import photo2 from './images/wide 2.jpg';
import photo3 from './images/wide 3.jpg';
import photo4 from './images/house-3150500.jpg';
// Interior photos 
import Interior1 from './images/Interior1.jpg';
import Interior2 from './images/Interior2.jpg';
import Interior3 from './images/Interior3.jpg';
import Interior4 from './images/Interior4.jpg';



export default function App() {

  const VillasPhotoes = [             
    { id: 1, src: photo1, title: "First View" },
    { id: 2, src: photo2, title: "Second View" },
    { id: 3, src: photo3, title: "Third View" },
    { id: 4, src: photo4, title: "Fourth View" },
  ];
  
  const InteriorDesign  = [             
    { id: 1, src: Interior1, title: "First View" },
    { id: 2, src: Interior2, title: "Second View" },
    { id: 3, src: Interior3, title: "Third View" },
    { id: 4, src: Interior4, title: "Fourth View" },
  ];

  
  return (
    <div>
    <NavBar/>
    <MainSlider/>
    <OurProject/>
    
    <WhoWeAre/>
    <ImageSliderComponent images={VillasPhotoes}/>
    
    <Availability/>
    <WhatsApp/>
    <ImageSliderComponent images={InteriorDesign}/>
    <div>
    
    </div>
    <Footer/>
    </div>
  )
}

