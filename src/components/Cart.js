import { useDispatch, useSelector } from "react-redux";

import { clearCart, modifyCart } from "../utils/appStoreSlices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems[0]);
  const dispatch = useDispatch();
  const cleanCart = () => {
    dispatch(clearCart());
  };

  const handleQuantityOfDish = (id, action) => {
    if (action === "increment") {
      dispatch(modifyCart([id, action]));
    } else {
      dispatch(modifyCart([id, action]));
    }
  };

  if (cartItems.length === 0) return <h4>Add Some items to Cart to view</h4>;

  return (
    <div>
      <div>
        <button className="btn" onClick={cleanCart}>
          Clear Cart
        </button>
      </div>
      {cartItems?.map((data) => {
        return (
          <div className="list-group">
            <a className="list-group-item list-group-item-action list-group-item-secondary">
              <h6>{data.dishName}</h6>

              {data.dishPrice != "Not Available" ? (
                <h6>₹ {data.dishPrice * data.dishCount}</h6>
              ) : (
                <h6> "Not Available" </h6>
              )}
              <h6>{data.dishCount}</h6>
              <button
                className="btn btn-dark p-2 mr-2"
                onClick={() => {
                  handleQuantityOfDish(data.dishId, "increment");
                }}
              >
                +
              </button>
              <button
                className="btn btn-dark p-2 ml-2"
                onClick={() => {
                  handleQuantityOfDish(data.dishId, "decrement");
                }}
              >
                -
              </button>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
