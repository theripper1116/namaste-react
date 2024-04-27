import { useEffect, useState } from "react";

import { ADDRESS_URL, RESTAURENT_GEOGRAPHIC_DETAILS } from "../utils/Links";

const useRestaurentGeographicData = (enteredCity) => {
  const [latituedLongitudinalData, setLatituedLongitudinalData] = useState();

  const getIDForCity = async () => {
    const idData = await fetch(ADDRESS_URL + enteredCity);
    const idJsonData = await idData.json();
    getLatitudeLongitudeForCity(idJsonData?.data[0]?.place_id);
  };
  const getLatitudeLongitudeForCity = async (cityID) => {
    const geographicalData = await fetch(
      RESTAURENT_GEOGRAPHIC_DETAILS + cityID
    );
    const geographicalJSONData = await geographicalData.json();
    setLatituedLongitudinalData(geographicalJSONData?.data[0]?.geometry?.location);
  };
  useEffect(() => {
    getIDForCity();
  }, []);
  return latituedLongitudinalData;
};

export default useRestaurentGeographicData;
