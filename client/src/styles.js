import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  max-width: 100%;
  margin: 10% auto;
  padding: 1vh 10vw;
  text-align: center;
  @media only screen and (max-width: 1300px) {
    max-width: 70%;
    padding: 1vh 10vw;
  }
  @media only screen and (max-width: 768px) {
    max-width: 70%;
  }
`;

/*export const Container2 = styled.div`
  max-width: 100%;
  margin: auto;
  padding: 1vh 1vw;
  text-align: center;
  @media only screen and (min-width: 1300px) {
    max-width: 70%;
    padding: 1vh 10vw;
  }
  @media only screen and (min-width: 1300px) {
    max-width: 70%;
  }
`;*/

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 70%;
    height: 50vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
