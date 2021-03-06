import "./experience.css";
import experienceElements from "./Data";
import { ReactComponent as LichtIcon } from "./licht.svg";
import { ReactComponent as HolzIcon } from "./holz.svg";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import React, { useRef } from "react";
import ScrollToTop from "../scroll/ScrollToTop.js";

function Experience() {
  let lichtIconStyles = { background: "#06D6A0" };
  let holzIconStyles = { background: "#f9c74f" };
  const dates = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <h1 className="title">Termine</h1>
      <VerticalTimeline>
        {experienceElements.map((element) => {
          let isLichtIcon = element.icon === "licht";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isLichtIcon ? lichtIconStyles : holzIconStyles}
              icon={isLichtIcon ? <LichtIcon /> : <HolzIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isLichtIcon ? "lichtButton" : "holzButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <ScrollToTop />
      <div onClick={() => scrollToSection(dates)} className="link"></div>
    </div>
  );
}

export default Experience;
