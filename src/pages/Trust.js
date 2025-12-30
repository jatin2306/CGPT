import "../styles/pages/Trust.css";
import Nav from "../components/layout/header/Nav";
import Header from "../components/layout/header/Header";
import Statichiw from "../components/sections/safeguards/StaticSafeguards";
import Footer from "../components/layout/footer/Footer";

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