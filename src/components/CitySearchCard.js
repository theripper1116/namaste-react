import { useState } from "react";

import { RESTAURENT_GEOGRAPHIC_DETAILS } from "../utils/Links";

const CitySearchCard = ({ displayItem }) => {
  const { place_id, description } = displayItem;
  const [latitudeLongitudinalData, setLatituedLongitudinalData] = useState({});

  const getLatitudeLongitudeForCity = async (place_id) => {
    const geographicalData = await fetch(
      RESTAURENT_GEOGRAPHIC_DETAILS + place_id
    );
    const geographicalJSONData = await geographicalData.json();
    setLatituedLongitudinalData(
      geographicalJSONData?.data[0]?.geometry?.location
    );

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
