import RestaurentCard from "./RestaurentCard";
// import RestaurentData from "../data/RestaurentData";
import { useEffect, useState } from "react";
import { SWIGGY_API_URL } from "../data/Links";

const Body = () => {
  const [resStateData, setResStateData] = useState([]);

  const fetchDataFromSwiggy = async () => {
    const data = await fetch(SWIGGY_API_URL);
    const jsonData = await data;
    const json = await jsonData.json();
    setResStateData(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(() => {
    fetchDataFromSwiggy();
  }, []);

  return resStateData.length === 0 ? (
    <h1>Loading....</h1>
  ) : (
    <div className="body">
      <textarea
        className="body-search"
        placeholder="Enter any restaurent name"
      ></textarea>
      <button
        className="sort-btn"
        onClick={() => {
          const sortedData = resStateData.filter((val) => {
            return val.info.avgRating > 4.5;
          });
          setResStateData(sortedData);
          // console.log(sortedData);
        }}
      >
        Click Here to sort best restaurent
      </button>

      <div className="restaurent-card">
        {resStateData?.map((data) => {
          {/* console.log(data.info); */}
          return <RestaurentCard key={data.info.id} resData={data.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;
