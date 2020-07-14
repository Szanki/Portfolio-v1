import React from "react";
import "./App.scss";

import { Landingpage } from "./components/Landingpage";
import { BioSection } from "./components/BioSection";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Landingpage />
      <BioSection />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
