import { RES_IMAGE_LINK } from "../utils/Links";

const RestaurentCard = ({ resData }) => {
  // console.log(resData);
  const { name, cuisines, avgRating, cloudinaryImageId } = resData;
  // console.log(stringForImage);

  return (
    <div className="restaurent-list">
      <img
        className="restaurent-image"
        alt="restaurent-image"
        src={RES_IMAGE_LINK + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <h5>
        {cuisines?.map((val) => {
          return val + ", ";
        })}
      </h5>
      <h5>{avgRating}</h5>
    </div>
  );
};

export const withAvgRating = (RestaurentCard) => {
  return ({ resData }) => {
    return (
      <div>
        <label className="best-rated-label">Best Rated Restaurent</label>
        <RestaurentCard resData={resData}/>
      </div>
    );
  };
};

export default RestaurentCard;
