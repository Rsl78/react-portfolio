import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "./Header";
import NavBar from "./NavBar";
import MyProjects from "./MyProjects";
import { useContext } from "react";
import { ThemeContext } from "../context";
import AboutMe from "./AboutMe";
import ContactForm from "./ContactForm";

const Page = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsScrolled(false);
        } else {
          setIsScrolled(true);
        }
      },
      {
        root: null, // Use the viewport as the root
        threshold: 0.1, // Trigger when 10% of the header is visible
      }
    );

    const currentHeaderRef = headerRef.current;
    if (currentHeaderRef) {
      observer.observe(currentHeaderRef);
    }

    return () => {
      if (currentHeaderRef) {
        observer.unobserve(currentHeaderRef);
      }
    };
  }, []);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } px-3 h-screen font-primary overflow-auto snap-y snap-mandatory`}
    >
      <div className="container mx-auto">
        <div>
          <Header headerRef={headerRef} />
        </div>

        {/* Animate Navbar */}

        {/* Main Content */}
        <div
          className="snap-start px-1 md:px-0"
          style={{ paddingTop: isScrolled ? "60px" : "0" }}
        >
          <AnimatePresence>
            {isScrolled && (
              <motion.div
                key="navbar"
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                exit={{ y: -100 }}
                transition={{ duration: 0.5 }}
                className=" fixed top-0 left-0 w-full z-40"
              >
                <div className="">
                  <NavBar />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/*projects section*/}
          <AboutMe />
          <MyProjects />
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Page;
