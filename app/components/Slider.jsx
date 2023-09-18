"use client";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { initFlowbite } from "flowbite";
const SimpleSlider = () => {
  const sliderRef = useRef(0);
  useEffect(() => {
    initFlowbite();
  }, []);
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 4,
          infinite: true,
          initialSlide: 0,
          // dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <div className="my-6">
      <div className="desktop hidden md:flex flex-wrap">
        <div className="md:w-100">
          <button
            type="button"
            className="text-black focus:duration-500 ease-in-out focus:text-white bg-gray-100 bg-gradient-to-r focus:bg-purple-400 font-medium rounded-md text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            All
          </button>
          <button
            type="button"
            className="text-black focus:duration-500 ease-in-out focus:text-white bg-gray-100 bg-gradient-to-r focus:bg-purple-400 font-medium rounded-md text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Protech
          </button>
          <button
            type="button"
            className="text-black focus:duration-500 ease-in-out focus:text-white bg-gray-100 bg-gradient-to-r focus:bg-purple-400 font-medium rounded-md text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Latest
          </button>
          <button
            type="button"
            className="text-black focus:duration-500 ease-in-out focus:text-white bg-gray-100 bg-gradient-to-r focus:bg-purple-400 font-medium rounded-md text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Legal
          </button>
          <button
            type="button"
            className="text-black focus:duration-500 ease-in-out focus:text-white bg-gray-100 bg-gradient-to-r focus:bg-purple-400 font-medium rounded-md text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Investment
          </button>

          <button
            type="button"
            className="text-black focus:duration-500 ease-in-out focus:text-white bg-gray-100 bg-gradient-to-r focus:bg-purple-400 font-medium rounded-md text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Decor
          </button>
          <button
            type="button"
            className="text-black focus:duration-500 ease-in-out focus:text-white bg-gray-100 bg-gradient-to-r focus:bg-purple-400 font-medium rounded-md text-lg px-5 py-2.5 text-center mr-2 mb-2"
          >
            Regional
          </button>
        </div>
        
      </div>

      <div className="md:hidden w-[100%] font-merriweather relative">
        <div className="mb-2 text-sm">
          <Slider className="w-[100%] px-4" ref={sliderRef} {...settings}>
            <button
              key={1}
              className="m-0 p-1 text-center border-b-2 border-white focus:text-green-500 focus:border-b-green-500 px-1 hover:text-green-500"
            >
              All
            </button>

            <button
              key={2}
              className="m-0 p-1 text-center border-b-2 border-white focus:text-green-500 focus:border-b-green-500 px-1 hover:text-green-500"
            >
              Protech
            </button>
            <button
              key={3}
              className="m-0 p-1 text-center border-b-2 border-white focus:text-green-500 focus:border-b-green-500 px-1 hover:text-green-500"
            >
              Latest
            </button>
            <button
              key={4}
              className="m-0 p-1 text-center border-b-2 border-white focus:text-green-500 focus:border-b-green-500 px-1 hover:text-green-500"
            >
              Legal
            </button>
            <button
              key={5}
              className="m-0 p-1 text-center border-b-2 border-white focus:text-green-500 focus:border-b-green-500 px-1 hover:text-green-500"
            >
              Investment
            </button>
            <button
              key={6}
              className="m-0 p-1 text-center border-b-2 border-white focus:text-green-500 focus:border-b-green-500 px-1 hover:text-green-500"
            >
              Decor
            </button>
            <button
              key={7}
              className="m-0 p-1 text-center border-b-2 border-white focus:text-green-500 focus:border-b-green-500 px-1 hover:text-green-500"
            >
              Regional
            </button>
          </Slider>
          <button
            className="md:hidden pt-1 absolute left-0 top-[2px]"
            onClick={previous}
          >
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/ios/50/less-than.png"
              alt="less-than"
            />
            {/* <img width="35" height="35" src="https://img.icons8.com/carbon-copy/100/back.png" alt="back"/> */}
          </button>
          <button
            className="md:hidden p-1 absolute right-0 top-[2px]"
            onClick={next}
          >
            <img
              width="16"
              height="16"
              src="https://img.icons8.com/ios/50/more-than.png"
              alt="less-than"
            />
            {/* <img width="35" height="35" src="https://img.icons8.com/carbon-copy/100/more-than.png" alt="more-than"/> */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleSlider;
