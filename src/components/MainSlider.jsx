import React, { useState } from 'react';
import Video1 from "../videos/firstview.mp4"; //downloaded videos 
import Video2 from '../videos/secondview.mp4'; //downloaded videos
import Video3 from '../videos/thirdview.mp4'; //downloaded videos
import Video4 from '../videos/fourthview .mp4'; //downloaded videos
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";//React-icons
import { RxDividerHorizontal } from "react-icons/rx"; //React-icons

const videoList = [              // adding array of videos with id for easy mapping 
  { id: 1, src: Video1, title: "First View" },
  { id: 2, src: Video2, title: "Second View" },
  { id: 3, src: Video3, title: "Third View" },
  { id: 4, src: Video4, title: "Fourth View" },
];

export default function MainSlider() {
  const [navigation, setNavigation] = useState(0); //use state for incrementing and decrementing 

  function SliderForward() { //function of increminting the videos 
    const isLastslide = navigation === videoList.length -1
    const newIndex = isLastslide ? 0: navigation +1 
    setNavigation(newIndex)
    
  }
  function SliderBackward() {  //function of decreminting the videos 
    const isFirstslide = navigation === 0
    const newIndex = isFirstslide ? videoList.length -1 : navigation -1 
    setNavigation(newIndex)
  }


  function SliderNavigation(SliderIndex) { 
    setNavigation(SliderIndex) //function for the slider bar _ _ _ _ //
  }


  return (


    <div className=' hover:shadow-2xl duration-300'>
      <div > {/** most important line of code for video  */}
        <video src={videoList[navigation].src} autoPlay loop muted 
        className="w-full h-[70vh] object-cover rounded-b-lg " />
      </div>

      <div className='absolute top-[35%] 
      -translate-x-0 -translate-y-[-50%] left-5 text-2xl 
      rounded-full p-2 bg-black/20 text-white cursor-pointer
      hover:scale-125 duration-500'
      
      onClick={SliderBackward}><BsChevronDoubleLeft size={40} /></div>
      <div className='absolute top-[35%] 
      -translate-x-0 -translate-y-[-50%] right-5 text-2xl 
      rounded-full p-2 bg-black/20 text-white cursor-pointer
      hover:scale-125 duration-500' 

      onClick={SliderForward}><BsChevronDoubleRight size={40} /></div>
      <div className='flex top-4 justify-center'>

        {videoList.map((item,index ) => (
          <div key={item.SliderIndex} 
          onClick={()=>SliderNavigation(index)}
          className='text-4xl cursor-pointer hover:scale-125 duration-200 hover:shadow-2xl'>
          <RxDividerHorizontal/>
          </div>
        ))}

      </div>
    </div>
  );
}

