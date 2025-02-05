const Card = () => {
  return (
    <div className=" bg-[#fafafa] dark:bg-[#181715] flex  shadow-lg rounded-lg overflow-hidden">
      {/* Image Section (30% width) */}
      <div className="w-[30%] flex flex-col items-center justify-center">
        <img
          src="../src/assets/OIP.jpeg"
          alt="Be Digital"
          className="object-contain h-auto mb-4 "
        />
        <div className="flex space-x-2">
          <span className=" text-blue-800 text-sm font-semibold px-1 py-1 rounded">
            HTML
          </span>
          <span className=" text-green-800 text-sm font-semibold px-1 py-1 rounded">
            CSS
          </span>
          {/* Add more tags as needed */}
        </div>
      </div>
      {/* Content Section (70% width) */}
      <div className="w-[70%] p-6">
        <h3 className=" text-[#000000] dark:text-[#dddddd] font-bold text-2xl mb-2">
          Be Digital
        </h3>
        <p className=" text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse error,
          incidunt dicta ut odit at nemo repellendus obcaecati eum recusandae
          magni, consequuntur, consequatur explicabo dolor laboriosam eligendi
          quo sit.
        </p>
        <a
          className="text-[#000000] dark:text-[#dddddd] hover:text-gray-600 dark:hover:text-blue-50 font-bold text-lg mt-4 inline-block"
          href="#"
        >
          See Project
        </a>
        <div className="w-8 h-0.5 bg-[#987750]"></div>
      </div>
    </div>
  );
};

export default Card;
