import "../styles/pages/Home.css";
import Navigation from "../components/layout/header/Navigation";
import Hiw from "../components/sections/how-it-works/HowItWorks";
import Box10 from "../components/sections/outcomes/ClinicalOutcomes";
import EverydayOutcomes from "../components/sections/outcomes/EverydayOutcomes";
import Footer from "../components/layout/footer/Footer";
import Statichome from "../components/sections/how-it-works/StaticHowItWorks";
import LoadingScreen from "../components/ui/LoadingScreen";
import { useState } from 'react';
import Playstores from "../components/sections/PlayStore";
import FirstNav from "../components/layout/header/FirstNav";
import Header from "../components/layout/header/Header";
import Hero from "../components/sections/hero/Hero";
import Absoluteheader from "../components/layout/header/AbsoluteHeader";
import Statichiw from "../components/sections/safeguards/StaticSafeguards";
import Roundbox from "../components/wrappers/Roundbox";
import Roundbox1 from "../components/wrappers/Roundbox1";

function Home() {
  return (
    <div className="home-container">
        <Header/>
        <FirstNav />
        <Navigation />
        <Roundbox/>
        <Roundbox1/>
      <Playstores />
      <Footer/>
    </div>
  );
}

export default Home;
