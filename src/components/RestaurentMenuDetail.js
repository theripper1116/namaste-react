import { DISHES_IMAGE_URL } from "../utils/Links";

const RestaurentMenuDetail = ({ restaurentMenuData }) => {
  const {
    category = "Not Available",
    defaultPrice = "Not Available",
    name = "Not Available",
    imageId = "Not Available",
  } = restaurentMenuData;
  return (
    <div className="card m-1" style={{ width: 200, height: 450 }}>
      <img
        src={DISHES_IMAGE_URL + imageId}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h4>{name}</h4>
        <h5>{category}</h5>
        {defaultPrice === NaN ? (
          <h5>Prices not available</h5>
        ) : (
          <h5>Price: {defaultPrice / 100}</h5>
        )}
      </div>
    </div>
  );
};

export default RestaurentMenuDetail;
