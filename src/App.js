import Header from "./landingPage/Header"
import Card from "./landingPage/Card/Card"
import Footer from "./landingPage/Footer"

import { Routes, Route } from "react-router-dom"
import Homepage from "./Pages/Homepage"
import MexicoPage from "./Pages/MexicoPage"
import CroatiaPage from "./Pages/CroatiaPage"
import SerbiaPage from "./Pages/SerbiaPage"
import NotFoundPage from "./Pages/NotFoundPage"

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/croatia" element={<CroatiaPage />} />
        <Route path="/mexico" element={<MexicoPage />} />
        <Route path="/serbia" element={<SerbiaPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
