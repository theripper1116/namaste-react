import { useEffect, useState } from "react";

import { ADDRESS_URL, RESTAURENT_GEOGRAPHIC_DETAILS } from "../utils/Links";

const useRestaurentGeographicData = () => {
  const [latitudeLongitudinalData, setLatituedLongitudinalData] = useState();
  const [cityList = setCityList] = useState("");

  const enteredCity = document.getElementById("floatingTextarea").value;
  const getIDForCity = async () => {
    const idData = await fetch(ADDRESS_URL + enteredCity);
    const idJsonData = await idData.json();
    console.log(idJsonData);
    idJsonData?.data?.map((displayItem) => {
      setCityList(
        `<button
          type="button"
          className={displayItem.place_id}
          onClick=${getLatitudeLongitudeForCity(displayItem.place_id)}
        > 
        ${displayItem.description} </button>`
      );
      document.getElementById("show-area-results").innerHTML += cityList;
    });
  };
  const getLatitudeLongitudeForCity = async (cityID) => {
    const geographicalData = await fetch(
      RESTAURENT_GEOGRAPHIC_DETAILS + cityID
    );
    const geographicalJSONData = await geographicalData.json();
    // console.log(cityID);
    setLatituedLongitudinalData(
      geographicalJSONData?.data[0]?.geometry?.location
    );
  };

  useEffect(() => {
    getIDForCity(enteredCity);
  }, []);
  return latituedLongitudinalData;
};

export default useRestaurentGeographicData;
