import { RES_FULL_MENU } from "../data/Links";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import RestaurentMenuDetail from "./RestaurentMenuDetail";

const RestaurentMenu = () => {
  const [restaurentData, setRestaurentData] = useState([]);
  const [restaurentMenuData, setRestaurentMenuData] = useState([]);

  const { resID } = useParams();
//   console.log(resID);

  const fetchRestaurentMenu = async () => {
    const rawData = await fetch(RES_FULL_MENU+resID);
    const data = await rawData.json();
    console.log(data);
    setRestaurentData(data?.data?.cards[2]?.card?.card?.info);
    setRestaurentMenuData(
      data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    // console.log(restaurentData);
    // console.log(restaurentMenuData);
  };

  useEffect(() => {
    fetchRestaurentMenu();
  }, []);

  if (restaurentData.length === 0) return <h4>Loading...</h4>;
  console.log(restaurentMenuData);
  return (
    <div className="restaurent-data">
      <div className="restaurent-data-details">
        <h4>{restaurentData.name}</h4>
        <h4>{restaurentData.avgRating}</h4>
        <h4>Outlet: {restaurentData.areaName}</h4>
        <h4>{restaurentData.costForTwoMessage}</h4>
      </div>
      <div className="restaurent-data-offers">
        <h3>Deals For You!!</h3>
        {restaurentData?.aggregatedDiscountInfo?.descriptionList.map((data) => {
          return (
            <div className="restaurent-data-offers-description">
              <h5>{data.meta}</h5>
            </div>
          );
        })}
      </div>
      <div className="restaurent-menu-detail-card">
        {restaurentMenuData?.map((data) => {
          return (
            <RestaurentMenuDetail
              key={data.card.info.id}
              restaurentMenuData={data.card.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurentMenu;
