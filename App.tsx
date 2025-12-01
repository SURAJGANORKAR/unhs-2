import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhotoGallery from './components/PhotoGallery';
import About from './components/About';
import Faculty from './components/Faculty';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Alumni from './components/Alumni';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AboutMandal from './components/AboutMandal';

// Home Page Component
const Home: React.FC = () => (
  <>
    <Hero />
    <PhotoGallery />
    <About />
    <Academics />
    <Admissions />
    <Alumni />
    <Contact />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-mandal" element={<AboutMandal />} />
            <Route path="/faculty" element={<Faculty />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;