//import "./App.css";
import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUs from "./pages/ContactUs";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
import { Switch, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
//import "bootstrap/dist/css/bootstrap.min.css";
//import Experience from "./pages/experience/Experience.jsx";
import Projekt from "./pages/projekt/Projekt.jsx";

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
          <Route path="/contact">
            <ContactUs />
          </Route>
          <Route path="/projekt">
            <Projekt />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
