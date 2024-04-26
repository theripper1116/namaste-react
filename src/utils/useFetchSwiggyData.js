import { SWIGGY_API_URL } from "./Links";
import { getGeographicalDetails } from "../components/CitySearch";

import { useEffect, useState } from "react";

const useFetchSwiggyData = () => {
  const [resStateData, setResStateData] = useState([]);
  const fetchDataFromSwiggy = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const jsonData = await data.json();
    setResStateData(
      jsonData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  useEffect(() => {
    fetchDataFromSwiggy();
  }, []);
  return resStateData;
};

export default useFetchSwiggyData;
