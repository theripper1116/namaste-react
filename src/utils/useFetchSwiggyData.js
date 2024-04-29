import { useEffect, useState, useContext } from "react";

import RestaurentListContext from "./RestaurentListContext";
// import { getGeographicalDetails } from "../components/CitySearch";

const useFetchSwiggyData = () => {
  const { SWIGGY_API_URL } = useContext(RestaurentListContext);
  const [resStateData, setResStateData] = useState([]);
  const fetchDataFromSwiggy = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const jsonData = await data.json();
    setResStateData(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };
  useEffect(() => {
    fetchDataFromSwiggy();
    console.log("inside first useEffect");
  }, []);

  return resStateData;
};

export default useFetchSwiggyData;
