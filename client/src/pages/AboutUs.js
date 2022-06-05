import { useRef } from "react";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollTop from "../components/ScrollTop";
import ScrollToTop from "../pages/scroll/ScrollToTop.js";

const AboutUs = () => {
  const About = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
      <ScrollToTop />
      <div>
        <ul>
          <li onClick={() => scrollToSection(About)} className="link"></li>
        </ul>
      </div>
    </motion.div>
  );
};

export default AboutUs;
