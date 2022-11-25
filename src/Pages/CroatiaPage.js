import React from "react";
import { NavLink } from "react-router-dom";
import "./CroatiaPage.css";

const CroatiaPage = () => {
  const arrayOfData = [
    {
      id: 1,
      name: "Zagreb",
      picture:
        "https://i0.wp.com/passionspoon.com/wp-content/uploads/2018/07/P1160791.jpg?fit=3232%2C2160&ssl=1",
      title: "Zagreb - Food and Drinks",
      description:
        "Croatian cuisine is heterogeneous and is known as a cuisine of the regions, since every region of Croatia has its own distinct culinary tradition. Its roots date back to ancient times. The differences in the selection of foodstuffs and forms of cooking are most notable between those in mainland and those in coastal regions. Mainland cuisine is more characterized by the earlier Slavic and the more recent contacts with Hungarian and Turkish cuisine, using lard for cooking, and spices such as black pepper, paprika, and garlic.",
    },

    {
      id: 1,
      name: "Zagreb",
      picture:
        "https://finirecepti.net.hr/wp-content/uploads/2015/02/dalmatinska-pasticada-img-825x510.jpg",
      title: "Zagreb - Food and Drinks",
      description:
        "Croatian cuisine is heterogeneous and is known as a cuisine of the regions, since every region of Croatia has its own distinct culinary tradition. Its roots date back to ancient times. The differences in the selection of foodstuffs and forms of cooking are most notable between those in mainland and those in coastal regions. Mainland cuisine is more characterized by the earlier Slavic and the more recent contacts with Hungarian and Turkish cuisine, using lard for cooking, and spices such as black pepper, paprika, and garlic.",
    },
  ];

  return (
    <div className="croatiaPage">
      {/*   <div className="croatiaTitle">{arrayOfData.name}</div>
      <div className="croatiaCategories">
        <div className="rowContainer">
          <div className="imageContainer">
            <img src={arrayOfData.picture} className="image" />
          </div>
          <div className="imageDescription">{arrayOfData.description}</div>
        </div>
      </div> */}
      {arrayOfData.map((data) => {
        return <div className="croatiaTitle">{data.name}</div>;
      })}
    </div>
  );
};

export default CroatiaPage;
