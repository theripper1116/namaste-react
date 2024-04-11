import { DISHES_IMAGE_URL } from "../data/Links";

const RestaurentMenuDetail = ({ restaurentMenuData }) => {
  const { category, defaultPrice, name, imageId } = restaurentMenuData;
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
        <h4>{defaultPrice}</h4>
      </div>
    </div>
  );
};

export default RestaurentMenuDetail;
