import React from "react";

import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import teamwork from "../img/teamwork.svg";

import { About, Description } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          Was <span>erwartet</span> Sie ?
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={clock} />
              <h3>Zeit</h3>
            </div>
            <p>Sie brauchen Zeit!</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={teamwork} />
              <h3>Zusammenarbeit</h3>
            </div>
            <p>Wir arbeiten zusammen!</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={diaphragm} />
              <h3>Auf den Punkt</h3>
            </div>
            <p>Es wird nichts passend gemacht!</p>
          </Card>
        </Cards>
      </Description>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
