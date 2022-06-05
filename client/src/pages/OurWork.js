import { useRef } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import light from "../img/lampeorange.jpeg";
import hexe from "../img/hexe.jpeg";
import metall from "../img/metall.jpeg";
import ScrollToTop from "../pages/scroll/ScrollToTop.js";

import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  let history = useHistory();
  const work = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>Licht</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-light">
          <Hide>
            <motion.img variants={photoAnim} src={light} alt="light" />
          </Hide>
        </Link>
      </Movie>

      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <h2>Metalldesign</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-hexe">
          <img src={hexe} alt="hexe" />
        </Link>
      </Movie>

      <Movie
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>3 Techniken</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/metall-design">
          <img src={metall} alt="3 Techniken" />
        </Link>
      </Movie>
      <Cards>
        <Card>
          <Hide>
            <motion.button4
              onClick={() => {
                history.push("/projekt");
              }}
            >
              Fotos
            </motion.button4>
          </Hide>
        </Card>
        <Card>
          <Hide>
            <motion.button5
              onClick={() => {
                history.push("/experience");
              }}
            >
              Termine
            </motion.button5>
          </Hide>
        </Card>
      </Cards>
      <ScrollToTop />
      <div onClick={() => scrollToSection(work)} className="link"></div>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ff7600;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #8b0000;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #cc0000;
`;
const Frame3 = styled(Frame1)`
  background: #ff4500;
`;
const Frame4 = styled(Frame1)`
  background: #ff7600;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 12rem;
`;
export default OurWork;
