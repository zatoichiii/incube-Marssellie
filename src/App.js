import React, { useState, useEffect } from 'react';
import About from "./components/blocks/About";
import Aiming from "./components/blocks/Aiming";
import RulesTerms from "./components/blocks/RulesTerms";
import Footer from "./components/blocks/Footer";
import AwardsnCat from "./components/blocks/AwardsnCat";
import Header from "./components/blocks/Header";
import Banner from "./components/blocks/Banner";
import Overview from "./components/blocks/Overview";
import Operates from "./components/blocks/Operates";
import CoreValues from "./components/blocks/CoreValues";
import Gallery from "./components/blocks/Gallery";
import Loader from './components/UI/Loader';

function App() {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const images = [
      "/images/banner/main-bg.png",
      "/images/FFButtons/red1.png"
    ];

    const imagePromises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setPageLoaded(true);
    });
  }, []);

  return (
    <div className='App'>
      {!pageLoaded && <Loader />}
      {pageLoaded && (
        <>
          <Header />
          <Banner />
          <About />
          <Gallery />
          <Overview />
          <CoreValues />
          <Operates />
          <AwardsnCat />
          <RulesTerms />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
