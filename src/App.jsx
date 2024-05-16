import "./App.css";
import Equipment from "./pages/equipment/Equipment.jsx";
import Home from "./pages/home/HOME.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Know from "./pages/know-more/Know.jsx";
import Review from "./pages/review/Review.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Helmet from "./pages/helmet/Helmet.jsx";
import Bike from "./pages/bike/Bike.jsx";
import Pieces from "./pages/pieces/Pieces.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/equipment" element={<Equipment />}/>
        <Route path="/know-more" element={<Know/>}/>
        <Route path="/review" element={<Review/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/helmets" element={<Helmet/>}/>
        <Route path="/bikes" element={<Bike/>}/>
        <Route path="/pieces" element={<Pieces/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App