import { useDispatch, useSelector } from "react-redux";

import { clearCart } from "../utils/appStoreSlices/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems[0]);
  const dispatch = useDispatch();
  const cleanCart = () => {
    dispatch(clearCart());
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
              <h6>
                ₹
                {data.dishPrice != "Not Available"
                  ? data.dishPrice / 100
                  : "Not Available"}
              </h6>
              <h6>{data.dishCount}</h6>
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
