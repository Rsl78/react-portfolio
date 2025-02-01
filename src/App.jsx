import { useState, useEffect,useRef } from "react";
import NavBar from "./components/NavBar";
// import Card from "./components/Card";

import { motion, AnimatePresence } from "framer-motion";
import MyProjects from "./components/MyProjects";
import Header from "./components/Header";


const App = () => {
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

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);


  return (
    <div className="h-screen font-primary overflow-auto snap-y snap-mandatory">
      <div className="container mx-auto">
        <div>
          <Header headerRef={headerRef} />
        </div>

        {/* Animate Navbar */}

        {/* Main Content */}
        <div
          className="snap-start"
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
                <div className=" container mx-auto">
                  <NavBar />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/*projects section*/}
          <MyProjects />
        </div>
      </div>
    </div>
  );
};

export default App;
