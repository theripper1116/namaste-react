import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { RES_FULL_MENU } from "./Links";

const useFetchRestaurentMenu = () => {
  const { resID } = useParams();
  const fetchRestaurentMenu = async () => {
    const [restaurentRawData, setRestaurentRawData] = useState([]);
    // const [restaurentMenuData, setRestaurentMenuData] = useState([]);
    const rawData = await fetch(RES_FULL_MENU + resID);
    const data = await rawData.json();
    console.log(data);
    setRestaurentRawData(data);
    // setRestaurentData(data?.data?.cards[2]?.card?.card?.info);
    // setRestaurentMenuData(
    //   data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
    //     ?.card?.itemCards
    // );
    // console.log(restaurentData);
    // console.log(restaurentMenuData);
    return restaurentRawData;
  };

  useEffect(() => {
    fetchRestaurentMenu();
  }, []);
};

export default useFetchRestaurentMenu;
