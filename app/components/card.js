import Link from "next/link";
import Image from "next/image";
const Card = ({ classadd, id, title, content, published, date, name, tags, image }) => {
  const dateObject = new Date(date);
  date = dateObject.toISOString().split('T')[0];
  return (
    <div className={`${classadd} flex rounded-lg overflow-hidden justify-center bg-gray-700`}>
      <Link
        href={`/blog/${id}`}
        className="rounded-lg rounded-t-lg"
      >
        <div class="relative rounded-lg bg-gray-700">
          <img
            className=""
            src={image}
            alt=""
          />
            <h5 className="mt-4 m-2 text-lg lg:text-lg xl:text-2xl font-bold tracking-tight text-white">
              {title}
            </h5>

            <p className="m-3 font-normal text-gray-400">
              {date}
            </p>
            <p className="m-3 font-normal text-gray-400">
              {tags}
            </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;