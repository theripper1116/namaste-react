const RestaurentCard = (resData) => {
  console.log(resData);
  const { name, cuisines, avgRating, cloudinaryImageId } = resData;
  const stringForImage =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    { cloudinaryImageId };
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