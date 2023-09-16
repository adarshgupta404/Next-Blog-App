import Link from "next/link";

const Card = () => {
  return (
    <div className="max-w-full bg-[#f3f7ff] border border-gray-200 rounded-lg">
      <Link href="#">
        <img className="max-w-full rounded-t-lg " src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg" alt="" />
      </Link>
      <div className="p-5">
        <Link href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
           Title
          </h5>
        </Link>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          23/06/2019
        </div>
        <div className="category">
          Category
        </div>
      </div>
    </div>
  );
};

export default Card;
