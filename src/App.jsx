import { useState, useEffect,useRef } from "react";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import SideBar from "./components/SideBar";
import { ReactTyped } from "react-typed";
import { motion, AnimatePresence } from "framer-motion";

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Change the threshold as per your requirement
  //     if (window.scrollY > window.innerHeight - 100) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

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
          <header
            ref={headerRef}
            className="border min-h-screen relative font-primary snap-start"
          >
            {/* <h1 className="text-5xl font-bold ">rsl.</h1> */}
            {/* Animate Sidebar */}
            <SideBar />

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h2 className="text-black text-center font-tertiary text-4xl leading-normal">
                Hello
              </h2>
              <h2 className="text-black text-center font-tertiary text-4xl leading-normal">
                I am Roknuzzaman Rasel
              </h2>
              <h2 className="text-black text-center font-tertiary text-4xl leading-normal">
                I am a{" "}
                <ReactTyped
                  strings={[
                    "Software Engineer",
                    "Web Developer",
                    "Frontend Developer",
                  ]}
                  typeSpeed={150}
                  backSpeed={150}
                  loop
                />
              </h2>
            </div>

            <button className="absolute text-xl bottom-28 right-0 transform -rotate-90 origin-bottom-right hover:text-gray-900 font-semibold">
              dark mode.
            </button>
          </header>
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
          <section className="p-5 min-h-screen" id="projects">
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
              <div className="flex flex-col items-end pb-10">
                <h2 className="font-primary font-bold text-3xl mt-5">
                  personal project
                </h2>
                <div className="my-1 w-20 h-1 bg-[#987750]"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;
