import { useContext, useState } from "react";

import { RESTAURENT_GEOGRAPHIC_DETAILS } from "../utils/Links";
import RestaurentListContext from "../utils/RestaurentListContext";

const CitySearchCard = ({ displayItem }) => {
  const { place_id, description } = displayItem;
  const [latitudeLongitudinalData, setLatituedLongitudinalData] = useState({});
  const { SWIGGY_API_URL } = useContext(RestaurentListContext);

  const getLatitudeLongitudeForCity = async (place_id) => {
    const geographicalData = await fetch(
      RESTAURENT_GEOGRAPHIC_DETAILS + place_id
    );
    const geographicalJSONData = await geographicalData.json();
    setLatituedLongitudinalData(
      geographicalJSONData?.data[0]?.geometry?.location
    );
    console.log(SWIGGY_API_URL);
    <RestaurentListContext.Provider value={{SWIGGY_API_URL: modifySwiggyURL()}} />;
    console.log(SWIGGY_API_URL);
  };

  modifySwiggyURL = () => {
    let changeLatOfSwiggyURL = SWIGGY_API_URL.replace(
      SWIGGY_API_URL.slice(
        SWIGGY_API_URL.indexOf("?") + 5,
        SWIGGY_API_URL.indexOf("&")
      ),
      latitudeLongitudinalData.lat
    );
    let changeLngOfSwiggyURL = changeLatOfSwiggyURL.replace(
      changeLatOfSwiggyURL.slice(
        changeLatOfSwiggyURL.indexOf("&") + 5,
        changeLatOfSwiggyURL.indexOf("&is")
      ),
      latitudeLongitudinalData.lng
    );
    return changeLngOfSwiggyURL;
  };
  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={() => {
          getLatitudeLongitudeForCity(place_id);
        }}
      >
        {description}
      </button>
    </div>
  );
};

export default CitySearchCard;
