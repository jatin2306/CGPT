import "../styles/pages/Trust.css";
import Try from "../components/sections/safeguards/Safeguards";
import Box3 from "../components/sections/safeguards/TrustSection";
import Nav from "../components/layout/header/Nav";
import Header from "../components/layout/header/Header";
import Statichiw from "../components/sections/safeguards/StaticSafeguards";
import Footer from "../components/layout/footer/Footer";
import BlankBox from "../components/sections/Blank";

function Trust(){
    return (
        <div className="trust-container">
        <Header />
        <Nav starOn="trust" />
         <Statichiw/>
         <Footer/>
        </div>
    );
}
export default Trust;