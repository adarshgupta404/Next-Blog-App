"use client";
import React, { useRef } from "react";
import Slider from "react-slick";
const SimpleSlider = () => {
  const sliderRef = useRef(0);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    // focusOnSelect: true,
    infinite: true,
    speed: 500,
    // dots: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          initialSlide: 0,
          // dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          initialSlide: 0,
          // dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite:true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <div className="relative">
      <div className="flex justify-center mb-2">
        <Slider className="w-[91%]" ref={sliderRef} {...settings}>
        <div className="text-center">
          <button
            key={1}
            className="m-0 p-1 font-semibold md:bg-blue-300 rounded-md px-8 md:px-10 lg:px-10 xl:px-18 focus:text-blue-700 hover:text-blue-600"
          >
            All
          </button>
          </div>
          <div className="text-center">
          <button
            key={2}
            className="m-0 p-1 font-semibold md:bg-slate-300 rounded-md px-4 md:px-10 lg:pr-10 xl:px-18 focus:text-blue-700 hover:text-blue-600"
          >
            Protech
          </button>
          </div>
          <div className="text-center">
          <button
            key={3}
            className="m-0 p-1 font-semibold md:bg-slate-300 rounded-md px-4 md:px-10 lg:px-8 xl:px-18 focus:text-blue-700 hover:text-blue-600"
          >
            Latest
          </button>
          </div>
          <div className="text-center">
          <button
            key={4}
            className="m-0 p-1 font-semibold md:bg-slate-300 rounded-md px-4 md:px-10 lg:px-10 xl:px-18 focus:text-blue-700 hover:text-blue-600"
          >
            Legal
          </button>
          </div>
          <div className="text-center">
          <button
            key={5}
            className="m-0 p-1 font-semibold md:bg-slate-300 rounded-md px-4 md:px-10 lg:px-10 xl:px-18 focus:text-blue-700 hover:text-blue-600"
          >
            Decor
          </button>
          </div>
          <div className="text-center">
          <button
            key={4}
            className="m-0 p-1 font-semibold md:bg-slate-300 rounded-md px-2 md:px-4 lg:px-4 xl:px-18 focus:text-blue-700 hover:text-blue-600"
          >
            Investment
          </button>
          </div>
          <div className="text-center">
          <button
            key={5}
            className="m-0 p-1 font-semibold md:bg-slate-300 rounded-md px-4 md:px-10 lg:px-10 xl:px-18 focus:text-blue-700 hover:text-blue-600"
          >
            Regional
          </button>
          </div>
          
          
        </Slider>
        <button className="absolute left-0" onClick={previous}>
        <img width="35" height="35" src="https://img.icons8.com/ios/50/less-than.png" alt="less-than"/>
        {/* <img width="35" height="35" src="https://img.icons8.com/carbon-copy/100/back.png" alt="back"/> */}
        </button>
        <button className="absolute right-0" onClick={next}>
        <img width="35" height="35" src="https://img.icons8.com/ios/50/more-than.png" alt="less-than"/>
        {/* <img width="35" height="35" src="https://img.icons8.com/carbon-copy/100/more-than.png" alt="more-than"/> */}
        </button>
      </div>
      
        
    </div>
  );
};

export default SimpleSlider;