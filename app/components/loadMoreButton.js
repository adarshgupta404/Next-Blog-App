"use client";
import { useEffect } from "react";
import { Ripple, initTE } from "tw-elements";

const Button = () => {
  useEffect(() => {
    const init = async () => {
      const { Datepicker, Input, initTE } = await import("tw-elements");
    };
    initTE({ Ripple });
    init();
  }, []);

  return (
    <button
      type="button"
      data-te-ripple-init
      data-te-ripple-color="white"
      class="rounded-lg px-4 w-52 py-2 border-2 border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-blue-100 duration-300"
    >
      Load More
    </button>
  );
};

export default Button;
