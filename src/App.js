import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import Trust from "./pages/Trust";
import Journey from "./pages/Journey";
import ScrollToTop from "./components/ui/ScrollToTop";
import Sample from "./pages/Sample";

function App() {


  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trust" element={<Trust />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/sample" element={<Sample />} />
      </Routes>
    </Router>
  );
}

export default App;
