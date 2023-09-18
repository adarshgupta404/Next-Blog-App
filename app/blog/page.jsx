import Card from "../components/card";
import axios from "axios";
import SimpleSlider from "../components/Slider";
import Seachbar from "../components/seachbar"; // Typo: Should this be 'Searchbar'?
import { getblogs } from "../../pages/api/getblogs";
import Link from "next/link";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/loadMoreButton"), {
  ssr: false,
});
export default async function Blog({ searchParams }) {
  // Corrected prop name
  const search = searchParams.search;
  async function fetchBlogs(query) {
    try {
      const response = await axios.get(
        `https://next-blog-app-eight-mu.vercel.app/api/getblogs?query=${query}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching blogs:", error);
      throw error;
    }
  }
  // const response = await axios.get("http://localhost:3000/api/getpost");
  const data1 = await fetchBlogs(search);
  // Handle the data here
  let data = [];
  if (data1.length > 0) {
    data = data1;
  }
  else if(search===undefined){
    // console.log(search)
    const response = await axios.get("https://next-blog-app-eight-mu.vercel.app/api/getpost");
    data = response.data;
  }
   else {
    // const response = await axios.get("http://localhost:3000/api/getpost");
    // data = response.data;
  }

  return (
    <>
      <div className="main px-2 pt-8 md:mx-16 lg:mx-32 md:pt-10">
        <div className="text-2xl font-semibold">Explore our guides</div>

        <SimpleSlider />

        <Seachbar />
        <div className="cards my-6">
          <div className="grid gap-4 md:grid-cols-2">
            {data &&
              data.map((post, index) => (
                
                  <Card
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
        </div>
      </div>
      <div className="flex m-4 justify-center">
        <DynamicComponent />
      </div>
    </>
  );
}
