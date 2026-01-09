import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./component/About";
import Services from "./component/Services";
import Project from "./component/Project";
import LoveStories from "./component/LoveStories";
import Contact from "./component/Contact";
import ReadMore from "./component/ReadMore";
import Footer from "./component/Footer";
import Stories1 from "./component/Stories1";
import Stories2 from "./component/Stories2";
import Slider1 from "./component/Slider1";
import Slider2 from "./component/Slider2";
import Slider3 from "./component/Slider3"
function App() {
  return (
    <Router>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Project />} />
        <Route path="/love-stories" element={<LoveStories />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/read-more" element={<ReadMore />} />
        <Route path="/stories1" element={<Stories1 />} />
        <Route path="/stories2" element={<Stories2 />} />
        <Route path="/slider1" element={<Slider1 />} />
        <Route path="/slider2" element={<Slider2 />} />
        <Route path="/slider3" element={<Slider3 />} />
      </Routes>


      <Footer />
    </Router>
  );
}

export default App;
