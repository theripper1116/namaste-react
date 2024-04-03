import { RES_IMAGE_LINK } from "../data/Links";

const RestaurentCard = (resData) => {
  console.log(resData);
  const { name, cuisines, avgRating, cloudinaryImageId } = resData;
  const stringForImage = RES_IMAGE_LINK + { cloudinaryImageId };
  return (
    <div className="restaurent-list">
      <img
        className="restaurent-image"
        alt="restaurent-image"
        src={stringForImage}
      ></img>
      <h3>{name}</h3>
      <h3>{cuisines}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};

export default RestaurentCard;
