import Header from "./landingPage/Header";
import Card from "./landingPage/Card/Card";
import Footer from "./landingPage/Footer";

import { Routes, Route } from "react-router-dom";
import MexicoPage from "./Pages/MexicoPage";
import CroatiaPage from "./Pages/CroatiaPage";
import SerbiaPage from "./Pages/SerbiaPage";
import NotFoundPage from "./Pages/NotFoundPage";
import { useState } from "react";

function App() {
  const [locationData, setLocationData] = useState([]);
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route
          path="/"
          element={
            <Card
              locationData={locationData}
              setLocationData={setLocationData}
            />
          }
        />
        <Route
          path="/zagreb"
          element={
            <CroatiaPage
              locationData={locationData}
              setLocationData={setLocationData}
            />
          }
        />
        <Route
          path="/Guadaljararar"
          element={
            <MexicoPage
              locationData={locationData}
              setLocationData={setLocationData}
            />
          }
        />
        <Route
          path="/beograd"
          element={
            <SerbiaPage
              locationData={locationData}
              setLocationData={setLocationData}
            />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
