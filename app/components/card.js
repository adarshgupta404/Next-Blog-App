import Link from "next/link";

const Card = ({id}) => {
  return (
    <Link href={`/blog/${id}`} className="h-auto max-w-full bg-[#f3f7ff] border border-gray-200 rounded-lg">
      <img className="rounded-t-lg " src="/homeimg.jpg" alt="" />
      <div className="p-5">
        <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          Title
        </div>
        <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          23/06/2019
        </div>
        <div className="category">Category</div>
      </div>
    </Link>
  );
};

export default Card;
