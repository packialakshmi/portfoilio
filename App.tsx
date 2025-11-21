import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Recommendations from './components/Recommendations';
import LinkedInUpdates from './components/LinkedInUpdates';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 selection:bg-brand-500/30 selection:text-brand-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Recommendations />
        <LinkedInUpdates />
        <Contact />
      </main>
    </div>
  );
};

export default App;
