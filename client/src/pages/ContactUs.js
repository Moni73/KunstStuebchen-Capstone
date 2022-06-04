import React from "react";
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
            Nimm gerne Kontakt zu mir auf{" "}
          </motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          {/*<Social variants={titleAnim}>
            <Circle />
            <h2>Sende eine EMail</h2>
  </Social>*/}
          <motion.button
            onClick={() => {
              history.push("/mail");
            }}
          >
            Kontakt
          </motion.button>
        </Hide>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Besuch mich auf Instagram</h2>
          </Social>
        </Hide>
      </div>
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
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: orangered;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
