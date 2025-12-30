import "../styles/pages/Journey.css";
import Nav from "../components/layout/header/Nav";
import Header from "../components/layout/header/Header";
import Box4 from "../components/sections/journey/JourneyTitle";
import SS from "../components/sections/journey/JourneySteps";
import Box7 from "../components/sections/journey/CoverageInfo";
import Staticjourney from "../components/sections/journey/StaticJourney";
import Footer from "../components/layout/footer/Footer";

function Journey(){
    return (
        <div className="journey-container">
           <Header />
           <Nav starOn="journey" />
           <Staticjourney />
           <Footer/>
        </div>
    );
}
export default Journey;