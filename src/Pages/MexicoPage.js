import React from "react";
import { NavLink } from "react-router-dom";
import "./MexicoPage.css";

const MexicoPage = () => {
  const data = {
    id: 1,
    name: "Guadalajara",
    title: "Food & Drinks",
    picture: "image",
    description:
      " Croatian cuisine is heterogeneous and is known as a cuisine of the regions, since every region of Croatia has its own distinct culinary tradition. Its roots date back to ancient times. The differences in the selection of foodstuffs and forms of cooking are most notable between those in mainland and those in coastal regions. Mainland cuisine is more characterized by the earlier Slavic and the more recent contacts with Hungarian and Turkish cuisine, using lard for cooking, and spices such as black pepper, paprika, and garlic.",
  };
  return (
    <div className="mexico">
      <div className="mexicoHeader">{data.name}</div>
      <div className="categories">
        <div className="foodBeverage">{data.title}</div>
      </div>
    </div>
  );
};

export default MexicoPage;
