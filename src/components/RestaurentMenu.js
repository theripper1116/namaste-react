import { RES_FULL_MENU } from "../utils/Links";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import useFetchRestaurentMenu from "../utils/useFetchRestaurentMenu";
// import RestaurentMenuDetail from "./RestaurentMenuDetail";
import RestaurentMenuCategory from "./RestaurentMenuCategory";

const RestaurentMenu = () => {
  const [restaurentData, setRestaurentData] = useState([]);
  const [restaurentMenuData, setRestaurentMenuData] = useState([]);

  const { resID } = useParams();
  // console.log(resID);

  const fetchRestaurentMenu = async () => {
    const rawData = await fetch(RES_FULL_MENU + resID);
    const data = await rawData.json();
    console.log(data);
    setRestaurentData(data?.data?.cards[2]?.card?.card?.info);
    setRestaurentMenuData(
      (data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards).filter(
        (val) =>
          val?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  };

  useEffect(() => {
    fetchRestaurentMenu();
  }, []);

  // // console.log(useFetchRestaurentMenu());
  // const restaurentRawData = useFetchRestaurentMenu();
  // console.log(restaurentRawData);
  // setRestaurentData(restaurentRawData?.data?.cards[2]?.card?.card?.info);
  // setRestaurentMenuData(
  //   (restaurentRawData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)?.filter(
  //     (val) =>
  //       val?.card?.card?.["@type"] ===
  //       "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  //   )
  // );

  if (restaurentData?.length === 0) return <h4>Loading...</h4>;
  // console.log(restaurentMenuData);
  return (
    <div className="restaurent-data">
      <div className="restaurent-data-details">
        <h4>Name: {restaurentData.name}</h4>
        <h4>Rating: {restaurentData.avgRating}</h4>
        <h4>Outlet: {restaurentData.areaName}</h4>
        <h4>{restaurentData.costForTwoMessage}</h4>
      </div>
      <div className="restaurent-data-offers">
        <h3>Deals For You!!</h3>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h4 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <b>
                  {restaurentData.aggregatedDiscountInfoV2.couponDetailsCta}
                </b>
              </button>
            </h4>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                {restaurentData?.aggregatedDiscountInfoV2?.descriptionList.map(
                  (data) => {
                    return <h5>{data.meta}</h5>;
                  }
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="restaurent-menu-detail-category-card">
        {restaurentMenuData?.map((data) => {
          return <RestaurentMenuCategory categoryName={data?.card?.card} />;
        })}
      </div>
    </div>
  );
};

export default RestaurentMenu;
