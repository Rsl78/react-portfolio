import { useState } from "react";
import { motion } from "framer-motion";
// import {createPortal} from 'react-dom';
import Card from "./Card";
import Modal from "./Modal";

const BlogSection = () => {
  const [shoWModal, setShowModal] = useState(false);
  return (
    <section className="pb-20 " id="projects">
      {shoWModal && <Modal onClose = {() => setShowModal(false)} />}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
          exit: { opacity: 0, x: -50 },
        }}
        viewport={{ once: false }}
      >
        {/* Your Card components */}
        <div className="flex flex-col items-start pb-5">
          <h2 className="dark:text-[#dddddd] font-primary font-bold text-3xl ">
            blogs
          </h2>
          <div className="my-1 w-20 h-1 bg-[#987750]"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card onReadblogClick ={() => setShowModal(true)} />
          <Card onReadblogClick ={() => setShowModal(true)} />
          
          
          
        </div>

        {/* Button for future use */}

        <div className="flex flex-col items-center justify-center pt-10">
          <div>
            <a
              className="dark:text-[#dddddd] hover:text-gray-600 dark:hover:text-blue-50 text-2xl font-semibold"
              href=""
            >
              See More Blogs
            </a>
            <div className=" w-12 h-1 bg-[#987750]"></div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default BlogSection;
