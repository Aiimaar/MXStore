import "./App.css";
import Equipment from "./pages/equipment/Equipment.jsx";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Know from "./pages/know-more/Know.jsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/equipment" element={<Equipment />}/>
        <Route path="/know-more" element={<Know/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App