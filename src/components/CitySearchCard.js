import { useContext, useState } from "react";

import { RESTAURENT_GEOGRAPHIC_DETAILS } from "../utils/Links";
import RestaurentListContext from "../utils/RestaurentListContext";

const CitySearchCard = ({ displayItem }) => {
  const { place_id, description } = displayItem;
  const [latitudeLongitudinalData, setLatituedLongitudinalData] = useState({});

  const getLatitudeLongitudeForCity = async (place_id) => {
    const geographicalData = await fetch(
      RESTAURENT_GEOGRAPHIC_DETAILS + place_id
    );
    const geographicalJSONData = await geographicalData.json();
    console.log(description);
    setLatituedLongitudinalData(
      geographicalJSONData?.data[0]?.geometry?.location
    );
    // modifySwiggyURL();
  };
  // const modifySwiggyURL = () => {
  //   const {SWIGGY_API_URL} = useContext(RestaurentListContext);
  //   let tempLat = SWIGGY_API_URL.slice(52, 60);
  //   let tempLng = SWIGGY_API_URL.slice(65, 73);
  //   tempLat = latitudeLongitudinalData.lat;
  //   tempLng = latitudeLongitudinalData.lng;
  //   // <RestaurentListContext.Provider value={SWIGGY_API_URL: }
  // };
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
