import { DISHES_IMAGE_URL } from "../utils/Links";

const RestaurentMenuDetail = ({ restaurentMenuData }) => {
  const {
    price = "Not Available",
    name = "Not Available",
    imageId = "Not Available",
    description = "Not Avaiable",
  } = restaurentMenuData?.card?.info;
  return (
    <div className="card m-1" style={{ width: 200, height: 450 }}>
      <img
        src={DISHES_IMAGE_URL + imageId}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h4>{name}</h4>
        {price != "Not Available" ? <h5>₹{price / 100}</h5> : <h5>{price}</h5>}
        <h5>{description}</h5>
      </div>
    </div>
  );
};

export default RestaurentMenuDetail;
