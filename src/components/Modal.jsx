import PropTypes from "prop-types";
import { useContext } from "react";
import { ThemeContext } from "../context";
import CloseIconDark from "../assets/icons/closeDark.svg";
import CloseIconLight from "../assets/icons/closeLight.svg";

const Modal = ({ onClose, blog, blogs, currentIndex, setCurrentIndex }) => {
  const { darkMode } = useContext(ThemeContext);

  // Handle Next Blog (Circular Navigation)
  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % blogs.length);
  };

  // Handle Prev Blog (Circular Navigation)
  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + blogs.length) % blogs.length);
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white/80 dark:bg-black/80 z-50">
      <div className="relative bg-white dark:bg-[#1d1b19] rounded-lg overflow-hidden w-11/12 max-w-5xl max-h-[90vh] flex flex-col">
        <div className="overflow-auto scrollbar-thin scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800">
          {/* Header */}
          <div className="p-4">
            <div className="flex justify-between items-center pb-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {blog.date}
                </p>
                <h3 className="font-bold text-lg text-gray-800 dark:text-[#dddddd]">
                  {blog.title}
                </h3>
              </div>
              {/* <button
                onClick={onClose}
                className="flex items-center justify-center"
              >
                <img
                  src={darkMode ? CloseIconDark : CloseIconLight}
                  alt="Close"
                  height={40}
                  width={40}
                />
              </button> */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-50 rounded-full p-2  transition"
              >
                <img
                  src={darkMode ? CloseIconDark : CloseIconLight}
                  alt="Close"
                  height={24}
                  width={24}
                />
              </button>
            </div>

            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={blog.liveDemoPicture}
                alt="Modal Visual"
                className="w-full max-h-96 object-cover "
              />
            </div>

            {/* Content */}
            <div className="text-gray-700 dark:text-[#dddddd] pt-4">
              <p>{blog.fullDescription}</p>
            </div>
          </div>

          {/* Pagination Controls - Placed After Content */}
          <div className="flex w-full mt-10 pt-4">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-1/2 border-r border-gray-300 dark:border-gray-700 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <span className="mr-2">←</span> PREV
            </button>

            <button
              onClick={handleNext}
              className="flex items-center justify-center w-1/2 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              NEXT <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  blog: PropTypes.object.isRequired,
  blogs: PropTypes.array.isRequired,
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
};

export default Modal;
