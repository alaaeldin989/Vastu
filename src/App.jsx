import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (<>
 <Header/>
 <Hero/>
 <Services/>
 <Portfolio/>
 <About/>
 <Review/>
 <Contact/>
 <Footer/>
  </>);
};

export default App;
