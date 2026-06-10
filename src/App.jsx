import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import Services from "./Services";
import WhyBest from "./Whybest";
import Technologies from "./Technologies";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <div className={`app ${loaded ? "loaded" : ""}`}>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyBest />
      <Technologies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;