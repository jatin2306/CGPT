import "../styles/pages/Home.css";
import Navigation from "../components/layout/header/Navigation";
import Footer from "../components/layout/footer/Footer";
import Playstores from "../components/sections/PlayStore";
import FirstNav from "../components/layout/header/FirstNav";
import Header from "../components/layout/header/Header";
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
