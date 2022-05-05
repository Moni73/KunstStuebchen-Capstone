import "./about.css";
import React from "react";

function AboutMe() {
  return (
    <div className="container py-5 row col-lg-6 col-xm-12">
      <div className="photo-wrap mb-5 col-lg-6 col-xm-20">
        <img className="profile-img" src="assets/m.jpg" alt="author" />
      </div>
      <h1 className="about-heading">Wer ist Piet ?</h1>
      <p>
        Ein Mann, der erst vor 5 Jahren seine wahre Leidenschaft, für die Kunst,
        wieder entdeckt hat. Von Hause aus komme ich u.a. aus dem Bereich der
        Metallgestaltung.
      </p>
      <p>
        Das Hauptthema meiner Arbeit ist Licht ,Wärme und Farbe. Meine Kunst
        soll das Gefühl der Geborgenheit transportieren. In der Gestaltung eines
        Lichtkörpers steht neben meiner Kunst , der Kunstliebhaber, im
        Mittelpunkt.
      </p>
      <p>
        Vor 2 Jahren sind dann, neben dem Licht, noch die Steine, Holz und
        verschiedene Metalle dazu gekommen.
      </p>
      <p>Neugierig geworden?!</p>
    </div>
  );
}

export default AboutMe;
