const Card = ({ key, id, title, content, published, date, name, tags, image }) => {
  const dateObject = new Date(date);
  date = dateObject.toISOString().split("T")[0];
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = new Date(date).toLocaleDateString(undefined, options);
  return (
    <>
    <div className="grid shadow-lg overflow-hidden mb-6 lg:mb-0 grid-cols-1 lg:grid-cols-2">
      <div className="">
      <img
        src={image}
        alt="Placeholder Image"
        class="w-full h-auto  rounded-[3px] "
      />
      </div>
      <div className="flex items-center my-6 lg:my-0 pl-5">
        <div className="space-y-2">
          <div className="text-xs font-semibold text-blue-400">{tags.toUpperCase()}</div>
        <div className="text-gray-800 text-lg md:text-sm lg:text-lg xl:text-xl font-semibold">
          {title}
        </div>
        <div className="text-sm text-gray-400">
          {formattedDate}
        </div>
        </div>
      </div>
    </div>
    </>

  );
};

export default Card;
