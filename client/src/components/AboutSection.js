import React from "react";
import { useHistory } from "react-router-dom";
import home1 from "../img/home1.jpeg";
import { About, Description, Image, Hide } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  let history = useHistory();
  return (
    <About>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="the artist" />
      </Image>
      <Wave />
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Ich bringe</motion.h2>
          </Hide>

          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Licht</span> in <span>IHR</span> Leben
            </motion.h2>
          </Hide>
        </motion.div>

        <motion.button
          onClick={() => {
            history.push("/contact");
          }}
        >
          Kontakt
        </motion.button>
      </Description>
    </About>
  );
};

export default AboutSection;
