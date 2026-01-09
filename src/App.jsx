import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./component/About";
import Services from "./component/Services";
import Project from "./component/Project";
import LoveStories from "./component/LoveStories";
import Contact from "./component/Contact";
import ReadMore from "./component/ReadMore";
import Footer from "./component/Footer";
import Stories1 from "./component/Stories1"
import Stories2 from "./component/Stories2";
function App() {
  return (
    <Router>
      <Routes>
        {/* STACKED SECTIONS HOME */}
        <Route path="/" element={<Home />} />

        {/* INDIVIDUAL SECTION ROUTES */}
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Project />} />
        <Route path="/love-stories" element={<LoveStories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/read-more" element={<ReadMore />} />
        <Route path="/stories1" element={<Stories1 />} />
        <Route path="/stories2" element={<Stories2 />} />
      </Routes>

      {/* GLOBAL FOOTER */}
      <Footer />
    </Router>
  );
}

export default App;
