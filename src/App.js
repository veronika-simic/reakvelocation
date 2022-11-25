import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import CroatiaPage from "./Pages/CroatiaPage";
import SerbiaPage from "./Pages/SerbiaPage";
import MexicoPage from "./Pages/MexicoPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Croatia" element={<CroatiaPage />} />
        <Route path="/Mexico" element={<MexicoPage />} />
        <Route path="/Serbia" element={<SerbiaPage />} />
      </Routes>
    </div>
  );
}

export default App;
