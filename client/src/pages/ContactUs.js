/*import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ContactUs = () => {
  let history = useHistory();
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>
            Nimm gerne Kontakt zu mir auf
          </motion.h2>
        </Hide>
      </Title>
      <Box1>
        <Hide>
          <motion.button4
            onClick={() => {
              history.push("/mail");
            }}
          >
            Kontakt
          </motion.button4>
        </Hide>
      </Box1>
      <Box1>
        <Hide>
          <motion.button5
            onClick={() => {
              history.push("/insta");
            }}
          >
            Instagram
          </motion.button5>
        </Hide>
      </Box1>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 5rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

const Box1 = styled.div`
  width: 500px;
  height: 150px;
  background-color: transparent;
`;

export default ContactUs;*/
