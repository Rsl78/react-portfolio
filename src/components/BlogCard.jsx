import PropTypes from "prop-types";

const BlogCard = ({ blog,onReadblogClick }) => {
    const { title, shortDescription, liveDemoPicture } = blog;
  return (
    
    <div className=" bg-black/2.5 dark:bg-white/0.75 flex flex-col md:flex-row  shadow-accent rounded-lg  overflow-hidden p-2">
      {/* Image Section (30% width) */}
      <div className=" md:w-[30%] flex flex-col items-center justify-center">
        <img
          src={liveDemoPicture}
          alt="Be Digital"
          className="object-contain h-auto rounded-md  "
        />
      </div>
      {/* Content Section (70% width) */}
      <div className="md:w-[70%] pt-2 md:pt-0 md:pl-4">
        <h3 className=" text-[#000000] dark:text-[#dddddd] font-bold text-xl mb-2">
          {title}
        </h3>
        <p className=" text-base">
          {shortDescription}
        </p>
        <a
          onClick={onReadblogClick}

          className="text-[#000000] dark:text-[#dddddd] hover:text-gray-600 dark:hover:text-blue-50 font-bold text-lg mt-2 inline-block"
          href="#"
        >
          Read blog
        </a>
        <div className="w-8 h-0.5 bg-[#987750]"></div>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  onReadblogClick: PropTypes.func,
    blog: PropTypes.object,
};

export default BlogCard;
