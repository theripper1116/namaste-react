import RestaurentCard from "./RestaurentCard";
import RestaurentData from "../data/RestaurentData"

const Body = () => {
  return (
    <div className="body">
      <textarea
        className="body-search"
        placeholder="Enter any restaurent name"
      ></textarea>
      <div className="restaurent-card">
        {RestaurentData?.map((data) => {
          console.log(data.info);
          <RestaurentCard resData={data.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;