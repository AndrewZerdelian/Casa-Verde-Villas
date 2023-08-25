import React, { useState } from 'react';
import { RxDividerHorizontal } from 'react-icons/rx';

export default function ImageSliderComponent  ({ images })  {
  const [navigation, setNavigation] = useState(0);

  function SliderNavigation(sliderIndex) {
    setNavigation(sliderIndex);
  }

  return (
    <div>
      <div>
        <img
          src={images[navigation].src}
          alt="span"
          className="rounded-xl mt-32 mx-auto w-[80%]
          xl:w-[80%] xl:h-[80vh] "
        />
      </div>

      <div className="flex top-4 justify-center">
        {images.map((item, index) => (
          <div
            key={item.id}
            onClick={() => SliderNavigation(index)}
            className="text-4xl cursor-pointer hover:scale-125 duration-200 hover:shadow-2xl"
          >
            <RxDividerHorizontal />
          </div>
        ))}
      </div>
    </div>
  );
};

