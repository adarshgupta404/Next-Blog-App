import Card from "../components/card";
import { sql } from "@vercel/postgres";
export default async function Blog() {
  const result = await sql`SELECT * FROM "posts";`;
  const posts = result.rows;
  const data =  posts
  console.log(data)
  // const [data, setData] = useState([]); // Initialize data as an empty array

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const res = await fetch("http://localhost:3000/api/getposts");
  //       if (!res.ok) {
  //         console.log("No data fetched");
  //         return;
  //       }
  //       const jsonData = await res.json();
  //       setData(jsonData); // Update the state with fetched data
  //       // console.log(jsonData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
  //   fetchData();
  // }, []);
  return (
    <>
      <div className="main px-2 pt-8 md:mx-16 lg:mx-32 md:pt-10">
        <div className="text-2xl font-semibold pb-4 md:pb-6 pl-2">
          Explore our guides
        </div>
        <div className="tags block lg:flex-wrap md:justify-center lg:justify-start  xl:space-x-16 lg:space-x-6 md:space-x-4 space-x-2">
          <button className="bg-slate-200 focus:text-blue-700 px-8 m-2 p-2 font-semibold rounded-lg hover:text-blue-600">
            All
          </button>
          <button className="bg-slate-200 focus:text-blue-700 px-8 m-2 p-2 font-semibold rounded-lg hover:text-blue-600">
            Protech
          </button>
          <button className="bg-slate-200 focus:text-blue-700 px-8 m-2 p-2 font-semibold rounded-lg hover:text-blue-600">
            Latest
          </button>
          <button className="bg-slate-200 focus:text-blue-700 px-8 m-2 p-2 font-semibold rounded-lg hover:text-blue-600">
            Legal
          </button>
          <button className="bg-slate-200 focus:text-blue-700 px-8 m-2 p-2 font-semibold rounded-lg hover:text-blue-600">
            Decor
          </button>
          <button className="bg-slate-200 focus:text-blue-700 px-8 m-2 p-2 font-semibold rounded-lg hover:text-blue-600">
            Investment
          </button>
          <button className="bg-slate-200 focus:text-blue-700 px-8 m-2 p-2 font-semibold rounded-lg hover:text-blue-600">
            Regional
          </button>
        </div>

        <div class="relative my-4">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 border-blue-700 pl-10 text-sm text-gray-900 border-2 rounded-lg bg-gray-5"
            placeholder="Search"
          />
        </div>
        <div className="cards lg:flex md:justify-center lg:justify-start gap-4">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
            {/* <Card id="1" />
            <Card id="2" /> */}
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
          <div className="gap-4 pt-6 lg:pt-0">
            <div className="flex justify-center">
              <div className="flex justify-center">
                <img className="h-auto rounded-lg" src="/home.png" alt="" />
                <div className="text absolute w-64 pt-8 text-xs text-white">
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
            </div>
            <div className="flex mt-4 justify-center">
              <div className="font-semibold w-80 rounded-lg bg-[#f3f7ff] p-8 text-sm">
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
