import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen text-white">
        <Link className="bg-black" href={"/blog"}>Click here to Go To Blogs</Link>
      </div>
    </>
  );
}
