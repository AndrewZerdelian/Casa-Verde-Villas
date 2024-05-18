import React from "react";
import NavBar from "./components/NavBar";
import MainSlider from "./components/MainSlider";
import OurProject from "./components/OurProject";
import WhatsApp from "./components/WhatsApp";
import WhoWeAre from "./components/WhoWeAre";
import Availability from "./components/Availability";
import ImageSliderComponent from "./components/ImageSliderComponent";
import Footer from "./components/Footer";

/**
 * // villas photoes
import photo1 from './images/1.jpg';
import photo2 from './images/wide 2.jpg';
import photo3 from './images/wide 3.jpg';
import photo4 from './images/house-3150500.jpg';
// Interior photos 
import Interior1 from './images/Interior1.jpg';
import Interior2 from './images/Interior2.jpg';
import Interior3 from './images/Interior3.jpg';
import Interior4 from './images/Interior4.jpg';

 * 
 */

export default function App() {
  const VillasPhotoes = [
    {
      id: 1,
      src: "https://firebasestorage.googleapis.com/v0/b/content-for-casa-verde.appspot.com/o/1.jpg?alt=media&token=3f06a7ab-1e91-4572-8f54-b83e7c164f58",
      title: "First View",
    },
    {
      id: 2,
      src: "https://firebasestorage.googleapis.com/v0/b/content-for-casa-verde.appspot.com/o/wide%202.jpg?alt=media&token=1ceaf013-635b-470a-8696-68fd2a7c3099",
      title: "Second View",
    },
    {
      id: 3,
      src: "https://firebasestorage.googleapis.com/v0/b/content-for-casa-verde.appspot.com/o/wide%203.jpg?alt=media&token=d37ca8d3-049d-4961-8868-034a970d9fe9",
      title: "Third View",
    },
    {
      id: 4,
      src: "https://firebasestorage.googleapis.com/v0/b/content-for-casa-verde.appspot.com/o/house-3150500.jpg?alt=media&token=bdf01b12-315b-4533-acbc-1620f39a61da",
      title: "Fourth View",
    },
  ];
  /**
   *   const VillasPhotoes = [             
    { id: 1, src: photo1, title: "First View" },
    { id: 2, src: photo2, title: "Second View" },
    { id: 3, src: photo3, title: "Third View" },
    { id: 4, src: photo4, title: "Fourth View" },
  ];
   */
  const InteriorDesign = [
    {
      id: 1,
      src: "https://firebasestorage.googleapis.com/v0/b/content-for-casa-verde.appspot.com/o/Interior1.jpg?alt=media&token=049fc77f-4e71-4b0d-b5e5-865175e353a8",
      title: "First View",
    },
    {
      id: 2,
      src: "https://firebasestorage.googleapis.com/v0/b/content-for-casa-verde.appspot.com/o/Interior2.jpg?alt=media&token=b5206fd2-314c-4388-a1be-fb927c3cf304",
      title: "Second View",
    },
    {
      id: 3,
      src: "https://firebasestorage.googleapis.com/v0/b/content-for-casa-verde.appspot.com/o/Interior3.jpg?alt=media&token=37dc147f-ceb8-4786-a840-e1cfe0b99573",
      title: "Third View",
    },
    {
      id: 4,
      src: "https://firebasestorage.googleapis.com/v0/b/content-for-casa-verde.appspot.com/o/Interior4.jpg?alt=media&token=a778b3ff-b52d-4820-ae35-fedbba9d50f1",
      title: "Fourth View",
    },
  ];
  /**
 *  const InteriorDesign  = [             
    { id: 1, src: Interior1, title: "First View" },
    { id: 2, src: Interior2, title: "Second View" },
    { id: 3, src: Interior3, title: "Third View" },
    { id: 4, src: Interior4, title: "Fourth View" },
  ];
 */

  return (
    <div>
      <NavBar />
      <MainSlider />
      <OurProject />

      <WhoWeAre />
      <ImageSliderComponent images={VillasPhotoes} />

      <Availability />
      <WhatsApp />
      <ImageSliderComponent images={InteriorDesign} />
      <div></div>
      <Footer />
    </div>
  );
}
