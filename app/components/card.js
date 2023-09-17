import Link from "next/link";
import Image from "next/image";
const Card = ({ id, title, content, published, date, name, tags, image }) => {
  const dateObject = new Date(date);
  date = dateObject.toISOString().split('T')[0];
  return (
    <div className="flex justify-center">
      <Link
        href={`/blog/${id}`}
        className="h-auto border border-gray-200 rounded-lg"
      >
        <div class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img
            class="rounded-t-lg"
            src={image}
            alt=""
          />
          <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {date}
            </p>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {tags}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;