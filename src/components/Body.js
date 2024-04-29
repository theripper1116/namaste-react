import { Link } from "react-router-dom";

import RestaurentCard, { withAvgRating } from "./RestaurentCard";
import useFetchSwiggyData from "../utils/useFetchSwiggyData";

const Body = () => {
  const resStateData = useFetchSwiggyData();
  const RestaurentCardWithLabel = withAvgRating(RestaurentCard);

  return resStateData.length === 0 ? (
    <h1>Loading....</h1>
  ) : (
    <div className="body">
      {/* <div className="body-search-section">
        <input
          className="body-search-section-textarea"
          placeholder="Enter any restaurent name"
          onKeyUp={() => {
            console.log("Inside TextArea");
          }}
        ></input>
        <button
          className="body-search-section-button"
          onClick={() => {
            // let searchText = document.getElementsByClassName(
            //   "body-search-section-textarea"
            // )[0].value;
            // console.log(searchText);
            // const searchedData = resStateData.map((val) => {
            //   console.log(val);
            //   if (val.info.name.includes(searchText)) return val;
            // });
            // setResStateData(searchedData);
          }}
        >
          Search!!
        </button>
      </div>
      <button
        className="sort-btn"
        onClick={() => {
          const sortedData = resStateData.filter((val) => {
            return val.info.avgRating > 4.5;
          });
          setResStateData(sortedData);
        }}
      >
        Click Here to sort best restaurent
      </button> */}

      <div className="restaurent-card">
        {resStateData?.map((data) => {
          return (
            <Link
              className="text-decoration-none"
              key={data?.info?.id}
              to={"/restaurants/" + data?.info?.id}
            >
              {data?.info?.avgRating >= 4.1 ? (
                <RestaurentCardWithLabel resData={data?.info} />
              ) : (
                <RestaurentCard resData={data?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
