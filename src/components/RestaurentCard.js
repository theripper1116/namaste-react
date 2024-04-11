import { RES_IMAGE_LINK } from "../data/Links";

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

export default RestaurentCard;
