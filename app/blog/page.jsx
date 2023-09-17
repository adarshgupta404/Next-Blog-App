"use client";
import Card from "../components/card";
import axios from "axios";
import SimpleSlider from "../components/Slider";
import { useState, useEffect } from "react";
export default function Blog() {
  const [data, setdata] = useState([]);
  const [input, setinput] = useState("");
  // const [converted, setconverted] = useState("".toLowerCase());
  // console.log(input)
  const handleinput = (tag) => {
    // setinput(tag.charAt(0).toLowerCase() + input.slice(1));
    setinput(tag.toLowerCase());
    console.log(tag.toLowerCase());
    // console.log(converted)
  };
  const fetchData = async () => {
    try {
      // Make a GET request to the Next.js API route
      const response = await axios.get("/api/getpost");
      const result = response.data;
      // Handle the data here
      setdata(result);
      console.log(result);
    } catch (error) {
      // Handle any errors
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="main px-2 pt-8 md:mx-16 lg:mx-32 md:pt-10">
        <div className="text-2xl font-semibold pb-4 md:pb-6 pl-2">
          Explore our guides
        </div>

        <SimpleSlider />

        <div className="flex justify-center m-4">
          <div class="w-[100%] md:w-[90%] border rounded-lg">
            <div class="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
              <div class="grid place-items-center h-full w-12 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                class="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                type="text"
                id="search"
                value={input}
                onChange={(e) => handleinput(e.target.value)}
                placeholder="Search something..."
              />
            </div>
          </div>
        </div>

        <div className="cards lg:flex md:justify-center lg:justify-start gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            {data.filter((post) => post.tags.toLowerCase().includes(input))
              .length > 1
              ? data
                  .filter((post) => post.tags.toLowerCase().includes(input))
                  .map((post, index) => (
                    <Card
                      classadd=""
                      key={index}
                      id={post.id}
                      title={post.title}
                      content={post.content}
                      date={post.data}
                      name={post.name}
                      tags={post.tags}
                      image={post.image}
                    />
                  ))
              : data
                  .filter((post) => post.tags.toLowerCase().includes(input))
                  .map((post, index) => (
                    <Card
                      classadd={"max-h-[67%]"}
                      key={index}
                      id={post.id}
                      title={post.title}
                      content={post.content}
                      date={post.data}
                      name={post.name}
                      tags={post.tags}
                      image={post.image}
                    />
                  ))}
          </div>
          <div className="gap-4 pt-6 lg:pt-0">
            <div className="flex relative justify-center">
              <img
                width="500"
                className="h-auto w-[100%] rounded-lg"
                src="/home.png"
                alt=""
              />
              <div className="absolute w-[80%] md:w-[70%] lg:w-[80%] xl:w-[90%] pt-8 text-sm sm:text-2xl lg:text-xs text-white">
                Find your dream home faster by just answering a few simple
                questions. Based on your lifestyle, our AI will recommend the
                best properties for you. <br />
                <br />
                Whether you want a modern penthouse, a cozy apartment, or a
                spacious villa, our AI will match you with the perfect home in
                no time.
                <br />
                <button className="rounded-xl my-4 p-2 bg-blue-700">
                  Take our Home Matching Quiz
                </button>
              </div>
            </div>
            <div className="flex mt-4 justify-center">
              <div className="font-semibold w-[100%] rounded-lg bg-[#f3f7ff] p-8 text-sm">
                Want to stay ahead of the curve with the latest news and trends
                in real estate?
                <br />
                <br /> Subscribe to our newsletter today.
                <br />
                <input
                  className="px-2 py-2 mt-4 mr-2 border-blue-700 text-sm text-gray-900 border-2 rounded-lg bg-gray-5"
                  placeholder="Enter your email address"
                />
                <button className="p-3 mt-4 bg-blue-600 text-white rounded-lg">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex m-4 justify-center">
          <button className="w-60 rounded-lg p-2 text-3xl text-white bg-blue-400">
            Load More
          </button>
        </div>
      </div>
    </>
  );
}
