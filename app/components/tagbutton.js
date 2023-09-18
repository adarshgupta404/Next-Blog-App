"use client";
import { useEffect, useState } from "react";
import { Ripple, initTE } from "tw-elements";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
const Button = ({text}) => {
  const [input, setinput] = useState("");
  const handleclick = (text) => {
    // setinput(tag.charAt(0).toLowerCase() + input.slice(1));
    setinput(text.toLowerCase());
    console.log(text)
    // console.log(converted)
  };
  const router = useRouter();
  const [query] = useDebounce(input, 200)
  useEffect(()=>{
    if(!query){
        router.push('/blog')
    }
    else if(query==="all"){
      router.push('/blog')
    }
    else{
        router.push(`/blog?search=${query}`)
    }
    initTE({Ripple})
    // console.log(input)
  },[query, router])

  return (
    <button
      type="button"
      onClick={()=>handleclick(text)}
      data-te-ripple-init
      data-te-ripple-color="white"
      className="text-black focus:duration-500 ease-in-out focus:text-white bg-gray-100 bg-gradient-to-r focus:bg-purple-400 font-medium rounded-md text-lg px-5 py-2.5 text-center mr-2 mb-2"
      >
      {text}
    </button>
  );
};

export default Button;
