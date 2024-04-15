import { DISHES_IMAGE_URL } from "../utils/Links";

const RestaurentMenuDetail = ({ restaurentMenuData }) => {
  const {
    category = "Not Available",
    defaultPrice = "Not Available",
    name = "Not Available",
    imageId = "Not Available",
  } = restaurentMenuData;
  return (
    <div className="restaurent-menu-detail">
      <img
        className="restaurent-menu-image"
        src={DISHES_IMAGE_URL + imageId}
        alt="dish_image"
      ></img>
      <div className="restaurent-menu-details">
        <h3>{name}</h3>
        <h4>{category}</h4>
        {defaultPrice === NaN ? (
          <h4>Prices not available</h4>
        ) : (
          <h4>Price: {defaultPrice / 100}</h4>
        )}
      </div>
    </div>
  );
};

export default RestaurentMenuDetail;
