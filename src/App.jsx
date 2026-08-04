import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';
import { About, Contact, Experience, Hero, Navbar, StarsCanvas, Tech, Works, SocialLinks } from './components';

const App = () => {
  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothTouch: true }}>
      <BrowserRouter
        basename="/akash-portfolio/"
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <div className="relative z-0 bg-primary">
          <SocialLinks />
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </ReactLenis>
  );
};

export default App;
