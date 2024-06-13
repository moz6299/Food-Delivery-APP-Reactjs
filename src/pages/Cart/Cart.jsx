import React, { useState,useEffect, useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/Storecontext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { subtotal,deliveryFee,total,food_list, cartItems, addToCart, removeFromCart } =
    useContext(StoreContext);


  
    

      

  return (
    <div className="cart">
      <div className="cart-items-title">
        <p>Items</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <br />
      <hr />
      {food_list.map((item, index) => {
        if (cartItems[item._id] > 0) {
          return (
            <div>
              <div key={index} className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p> {item.name} </p>
                <p> ${item.price} </p>
                <p> {cartItems[item._id]} </p>
                <p> ${item.price * cartItems[item._id]} </p>
                <p onClick={()=>removeFromCart(item._id)} className="cross" > x </p>
              </div>
              <hr />
            </div>
            
          );
        }
      })}


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
          {total>0?<Link to='/order' ><button className="proceed-checkout" >Proceed To Checkout</button></Link>: <></> }
          
        </div>

        {total>0? <div className="cart-promo-code">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>

          </div>
        </div> : <></> }

        



      </div>
    </div>
  );
};

export default Cart;

