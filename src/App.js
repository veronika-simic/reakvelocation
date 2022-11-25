import Header from "./landingPage/Header";
import Card from "./landingPage/Card";
import Footer from "./landingPage/Footer";

import { Routes, Route } from "react-router-dom";
import MexicoPage from "./Pages/MexicoPage";
import CroatiaPage from "./Pages/CroatiaPage";
import SerbiaPage from "./Pages/SerbiaPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Banner from "./landingPage/Banner/Banner";

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/croatia" element={<CroatiaPage />} />
        <Route path="/mexico" element={<MexicoPage />} />
        <Route path="/serbia" element={<SerbiaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
