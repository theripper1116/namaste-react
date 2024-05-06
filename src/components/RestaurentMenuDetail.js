import { useDispatch, useSelector } from "react-redux";

import { DISHES_IMAGE_URL } from "../utils/Links";
import { addItem, modifyCart } from "../utils/appStoreSlices/cartSlice";

const RestaurentMenuDetail = ({ restaurentMenuData }) => {
  const cartItems = useSelector((store) => store.cart.items);

  const {
    price = "Not Available",
    name = "Not Available",
    imageId = "Not Available",
    description = "Not Avaiable",
    id = "Not Available",
  } = restaurentMenuData?.card?.info;

  const dispatch = useDispatch();
  const addItemToDispatcher = () => {
    let checker = true;
    if (cartItems.length != 0) {
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].dishId === id) {
          console.log(cartItems[i].dishId);
          dispatch(modifyCart([id, "increment"]));
          checker = false;
          break;
        }
      }
      if (checker) {
        console.log("inside checker logic");
        dispatch(
          addItem({
            dishName: name,
            dishPrice: price / 100,
            dishCount: 1,
            dishId: id,
          })
        );
      }
      // cartItems.map((val) => {
      //   // console.log(val.dishId);
      //   if (val.dishId === id) {
      //     dispatch(modifyCart(id));
      //   }
      // });
    } else {
      console.log("inside insertion logic");
      dispatch(
        addItem({
          dishName: name,
          dishPrice: price / 100,
          dishCount: 1,
          dishId: id,
        })
      );
    }

    // const addItemToDispatcher = () => {
    //   dispatch(
    //     addItem({
    //       dishName: name,
    //       dishPrice: price / 100,
    //       dishCount: 1,
    //       dishId: id,
    //     })
    //   );
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
