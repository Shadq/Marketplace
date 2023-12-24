import React from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import News from "./components/News";
import NFTS from "./components/NFTS";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="h-full bg-black">
      <Header />
      <Hero />
      <News />
      <NFTS />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
