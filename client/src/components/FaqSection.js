import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        <span>Fragen/Antwort</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Welche Materialien werden verarbeitet?">
          <div className="answer">
            <p>Bevorzugt Holz, Messing, .....</p>
            <p>Offen für NEUES</p>
          </div>
        </Toggle>
        <Toggle title="Kann ich mir ein Kunstobjekt aussuchen und direkt kaufen?">
          <div className="answer">
            <p>Ja/Nein!</p>
            <p>
              Vielleicht hab ich mal ein Einzelstück / Ausstellungsstück in der
              Werkstatt. Da alle Objekte Einzelanfertigungen / Unikate sind -
              ein Seltenheitsfaktor.
            </p>
          </div>
        </Toggle>
        <Toggle title="Wartezeit von der Bestellung bis zur Auslieferung?">
          <div className="answer">
            <p>1 - 6 Monate</p>
            <p>
              Eine Lampe dauert ca. 1 - 2 Monate. Bei der Hexe waren es knapp 5
              Monate.
            </p>
          </div>
        </Toggle>
        <Toggle title="Mit welchen Kosten muss ich rechnen?">
          <div className="answer">
            <p>Das kann man pauschal nicht beantworten</p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #999999;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 2.5rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
