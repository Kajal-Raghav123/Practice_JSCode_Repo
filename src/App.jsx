import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import SlidingImage from "./Components/SlidingImage";
import PageDetails from "./Components/PageDetails";
import BlogSection from "./Components/BlogSection";
import LogoDesignSection from './Components/LogoDesignSection';
import FeaturedArticles from './Components/FeaturedArticles';
import ProjectSection from './Components/ProjectSection';
import Subject from './Components/Subject';
import Footer from "./Components/Footer";
import "./styles/desktop.css";
import "./styles/tablet.css";
import "./styles/mobile.css";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <SlidingImage />
            <BlogSection />
            <LogoDesignSection />
            <FeaturedArticles />
            <LogoDesignSection />
            <ProjectSection />
            <Subject/>
            <Footer/>
          </>
        } />
        <Route path="/read/:id" element={<PageDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
