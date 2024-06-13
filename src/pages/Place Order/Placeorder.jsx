import React, { useContext } from "react";
import "./Placeorder.css";
import { StoreContext } from "../../context/Storecontext";

const Placeorder = () => {
  const { subtotal,deliveryFee,total,food_list, cartItems, addToCart, removeFromCart } =
  useContext(StoreContext);




  return (
    <form className="placeorder">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="tel" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Totals</h2>
            <div>
              <div className="subtotal">
                <p>Subtotal</p>
                <p>${subtotal}</p>
              </div>
              <hr />
              <div className="subtotal">
                <p>Delivery Fee</p>
                <p>${deliveryFee}</p>
              </div>
              <hr />
              <div className="subtotal">
                <p>Total</p>
                <p>${total}</p>
              </div>
            </div>
            
              <button className="proceed-checkout">Proceed To Payment</button>
            
          </div>
        </div>
      </div>
    </form>
  );
};

export default Placeorder;
