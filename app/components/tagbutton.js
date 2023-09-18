"use client";
import { useEffect } from "react";
import { Ripple, initTE } from "tw-elements";

const Button = ({text}) => {
  useEffect(() => {
    initTE({ Ripple });
  }, []);

  return (
    <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="white"
      className="text-black focus:duration-500 ease-in-out focus:text-white bg-gray-100 bg-gradient-to-r focus:bg-purple-400 font-medium rounded-md text-lg px-5 py-2.5 text-center mr-2 mb-2"
      >
      {text}
    </button>
  );
};

export default Button;
