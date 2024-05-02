import { useEffect, useState, useContext } from "react";

import RestaurentListContext from "./RestaurentListContext";
// import { getGeographicalDetails } from "../components/CitySearch";

const useFetchSwiggyData = (url) => {
  const { SWIGGY_API_URL } = useContext(RestaurentListContext);
  // const [storeSwiggyURL, setSwiggyUrl] = useState("");
  const [resStateData, setResStateData] = useState([]);
  const fetchDataFromSwiggy = async () => {
    if (url !== null) {
      const data = await fetch(url);
      const jsonData = await data.json();
      setResStateData(
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } else {
      const data = await fetch(SWIGGY_API_URL);
      const jsonData = await data.json();
      setResStateData(
        jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    }
    // const data = await fetch(SWIGGY_API_URL);
    // const jsonData = await data.json();
    // setResStateData(
    //   jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants
    // );
  };
  useEffect(() => {
    fetchDataFromSwiggy();
    // console.log("inside first useEffect");
  }, []);

  return resStateData;
};

export default useFetchSwiggyData;
