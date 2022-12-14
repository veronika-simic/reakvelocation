import React from "react";
import { NavLink } from "react-router-dom";
import "./CountryPage.css";

function CountryPage({ country, category }) {
  const dataobj = {
    croatia: {
      foodDescription:
        "Croatian cuisine is heterogeneous and is known as a cuisine of the regions, since every region of Croatia has its own distinct culinary tradition. Its roots date back to ancient times. The differences in the selection of foodstuffs and forms of cooking are most notable between those in mainland and those in coastal regions. Mainland cuisine is more characterized by the earlier Slavic and the more recent contacts with Hungarian and Turkish cuisine, using lard for cooking, and spices such as black pepper, paprika, and garlic.",
      foodPicture:
        "https://www.fashion.hr/easyedit/UserFiles/rwd_images/MATEA/veljaca-16/strukli/_rwd_img3752-naslovna/img3752-naslovna_840_472.jpeg",

      foodTitle: "Food & fun",
      officeDescription:
        "Our office in Zagreb is placed in new modern office center called Wespa, Heinzlova 60 Street. The WESPA office and coworking space is a modern office concept in partnership with the Green Gold Center. WESPA creates a stimulating work environment for modern companies that require the office to have a superior work experience throughout the working day. Office assitant in Zagreb office is Karolina Vujnovic, and for any information about working visa you can ask her, or you can check Croatian Ministry of interior website on this page : https://mup.gov.hr/en ",

      officePicture:
        "https://www.journal.hr/wp-content/uploads/2021/01/Wespa-spaces_coworking_naslovna.jpg",

      officeTitle: "Our office & working visa info",

      lifeDescription:
        "Apartment per month: 45m2 600€ rent+ 100€ water/electricity, check https://www.njuskalo.hr;  Food in restaurants: 10€ per meal; Drink in bars: 3€ beer, 4€ wine, 6€ cocktails; Cigars: round 5€; Gasoline: 2€/L;",

      lifePicture:
        "https://www.evadinaricaproject.com/wp-content/uploads/2019/03/img_20190322_182029105_hdr-011865919890-1024x576.jpg",
      lifeTitle: "Our office & working visa info",
    },
    serbia: {},
    mexio: {},
  };
  function checkWhichCountry(cat, country) {
    console.log(cat.name);
    console.log(country.name);

    console.log(country.name.includes(cat.name));
    if (country.name.includes(cat.name)) {
      return (
        <div>
          <div className="name container">
            <p className="cityName">{cat.name}</p>
          </div>

          <div className="dataContainer">
            <div>{cat.description}</div>
          </div>

          <div className="img">
            <img src="ablacsd" />
          </div>
        </div>
      );
    }
  }

  console.log(country);
  return (
    <div className="country">
      <div className="countryName">{country.name}</div>
      <div className="countryDescription">{country.description}</div>

      <div className="imageRow">
        <div className="image">
          <img
            src={`${dataobj.croatia.foodPicture}`}
            alt="This is an alt to remove linter"
            className="img"
          />
        </div>
        <div className="imageDescription">
          {dataobj.croatia.foodDescription}
        </div>
      </div>

      <div className="imageRow">
        <div className="image">
          <img
            src={`${dataobj.croatia.officePicture}`}
            alt="This is an alt to remove linter"
            className="img"
          />
        </div>
        <div className="imageDescription">
          {dataobj.croatia.officeDescription}
        </div>
      </div>

      <div className="imageRow">
        <div className="image">
          <img
            src={`${dataobj.croatia.lifePicture}`}
            alt="This is an alt to remove linter"
            className="img"
          />
        </div>
        <div className="imageDescription">
          {dataobj.croatia.lifeDescription}
        </div>
      </div>
    </div>
  );
}

export default CountryPage;
