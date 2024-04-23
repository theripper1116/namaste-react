import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { RES_FULL_MENU } from "./Links";

const useFetchRestaurentMenu = () => {
  const [restaurentData, setRestaurentData] = useState([]);
  const { resID } = useParams();
  const fetchRestaurentMenu = async () => {
    const rawRestaurentData = await fetch(RES_FULL_MENU + resID);
    const restaurentData = await rawRestaurentData.json();
    setRestaurentData(restaurentData);
  };
  useEffect(() => {
    fetchRestaurentMenu();
  }, []);
  return restaurentData;
};

export default useFetchRestaurentMenu;
