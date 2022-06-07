import "./App.css";
import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import Experience from "./pages/experience/Experience.jsx";
import Projekt from "./pages/projekt/Projekt.jsx";
import Mail from "./pages/mail/Mail.jsx";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <AboutUs />
          </Route>
          <Route path="/work" exact>
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/projekt">
            <Projekt />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/contact">
            <Mail />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
