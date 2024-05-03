import { useDispatch } from "react-redux";

import { DISHES_IMAGE_URL } from "../utils/Links";
import { addItem } from "../utils/appStoreSlices/cartSlice";

const RestaurentMenuDetail = ({ restaurentMenuData }) => {
  const {
    price = "Not Available",
    name = "Not Available",
    imageId = "Not Available",
    description = "Not Avaiable",
  } = restaurentMenuData?.card?.info;

  const dispatch = useDispatch();
  const addItemToDispatcher = () => {
    dispatch(addItem(name));
  };
  return (
    <div className="card m-1" style={{ width: 200 }}>
      <div className="card-header">
        <img
          src={DISHES_IMAGE_URL + imageId}
          className="card-img-top"
          alt="..."
        />
      </div>
      <div className="card-body">
        <h4>{name}</h4>
        {price != "Not Available" ? <h5>₹{price / 100}</h5> : <h5>{price}</h5>}
        <h5>{description}</h5>
      </div>
      <button className="btn p-2 mb-3" onClick={addItemToDispatcher}>
        Add To Cart!!!
      </button>
    </div>
  );
};

export default RestaurentMenuDetail;
