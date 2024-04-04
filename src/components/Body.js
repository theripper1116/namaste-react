import RestaurentCard from "./RestaurentCard";
import RestaurentData from "../data/RestaurentData";
import { useState } from "react";

const Body = () => {
  const [resStateData, setResStateData] = useState(RestaurentData);
  const fetchDataFromSwiggy = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data;
    const json = await jsonData.json();
    console.log(json);
  };

  fetchDataFromSwiggy();

  return (
    <div className="body">
      <textarea
        className="body-search"
        placeholder="Enter any restaurent name"
      ></textarea>
      <button
        className="sort-btn"
        onClick={() => {
          const sortedData = resStateData.filter((val) => {
            return val.info.avgRatingString > 4.5;
          });
          setResStateData(sortedData);
          console.log(resStateData);
        }}
      >
        Click Here to sort best restaurent
      </button>
      <div className="restaurent-card">
        {resStateData?.map((data) => {
          console.log(data.info);
          <RestaurentCard resData={data.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
