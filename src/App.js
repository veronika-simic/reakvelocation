import Header from "./landingPage/Header";
import Card from "./landingPage/Card/Card";
import Footer from "./landingPage/Footer";
import CountryPage from "./Pages/CountryPage";
import { Routes, Route } from "react-router-dom";

import NotFoundPage from "./Pages/NotFoundPage";
import { useEffect, useState } from "react";
import { getAllCountries, getAllCategories } from "./api/api";

function App() {
  const [countries, setCountries] = useState([]);
  const [categories, setCategories] = useState([]);

  const getAllCategoriesFromApi = async () => {
    const categoriesResponse = await getAllCategories();
    setCategories(categoriesResponse.data);
    console.log(categoriesResponse);
  };
  const getAllCountriesFromApi = async () => {
    const response = await getAllCountries();
    console.log(response);
    setCountries(response.data);
  };

  useEffect(() => {
    getAllCountriesFromApi();
    getAllCategoriesFromApi();
  }, []);

  console.log(categories);
  console.log(countries);

  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Card countries={countries} />} />

        {countries.length > 0 &&
          countries.map((country) => (
            <Route
              key={country.id}
              path={`/${country.name}`}
              element={
                <CountryPage
                  country={country}
                  category={categories}
                ></CountryPage>
              }
            ></Route>
          ))}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
