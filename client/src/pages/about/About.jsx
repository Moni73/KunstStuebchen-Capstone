import "./about.css";
import React from "react";

function AboutMe() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src="assets/m.jpg" alt="author" />
          </div>
          <div className="col-lg-6 col-xm-12">
            <h1 className="about-heading">Wer ist Piet ?</h1>
            <p>
              Ein Mann, der erst vor 5 Jahren seine wahre Leidenschaft, für die
              Kunst, wieder entdeckt hat. Von Hause aus komme ich u.a. aus dem
              Bereich der Metallgestaltung.
              <br></br>
              Das Hauptthema meiner Arbeit ist Licht ,Wärme und Farbe. Meine
              Kunst soll das Gefühl der Geborgenheit transportieren. In der
              Gestaltung eines Lichtkörpers steht neben meiner Kunst , der
              Kunstliebhaber, im Mittelpunkt.
              <br></br>
              Vor 2 Jahren sind dann, neben dem Licht, noch die Steine, Holz und
              verschiedene Metalle dazu gekommen.
              <br></br>
              Neugierig geworden?!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
