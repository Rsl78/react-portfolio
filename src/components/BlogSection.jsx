import { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "./BlogCard";
import Modal from "./Modal";
import { blogData } from "../data";

const BlogSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleBlogs, setVisibleBlogs] = useState(2); // Show 2 blogs initially

  const handleReadBlog = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };

  const handleSeeMore = () => {
    setVisibleBlogs((prev) => prev + 2);
  };

  return (
    <section className="pb-20" id="projects">
      {showModal && (
        <Modal
          blog={blogData[currentIndex]}
          blogs={blogData}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          onClose={() => setShowModal(false)}
        />
      )}

      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 1 } }}
        viewport={{ once: false }}
        id="blogs"
      >
        <div className="flex flex-col items-start pb-5">
          <h2 className="dark:text-[#dddddd] font-primary font-bold text-3xl">
            Blogs
          </h2>
          <div className="my-1 w-20 h-1 bg-[#987750]"></div>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogData.slice(0, visibleBlogs).map((blog, index) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onReadblogClick={() => handleReadBlog(index)}
            />
          ))}
        </div>

        {/* "See More" Button */}
        {visibleBlogs < blogData.length && (
          <div className="flex flex-col items-center justify-center pt-10">
            <button
              onClick={handleSeeMore}
              className="dark:text-[#dddddd] hover:text-gray-600 dark:hover:text-blue-50 text-2xl font-semibold"
            >
              See More Blogs
            </button>
            <div className="w-12 h-1 bg-[#987750]"></div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default BlogSection;
