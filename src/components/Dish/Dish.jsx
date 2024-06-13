import React, { useContext } from "react";
import "./Dish.css";
import { assets } from "../../assets/assets/assets";
import { StoreContext } from "../../context/Storecontext";


const Dish = ({ id, name, image, price, description }) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    

    return (
        <div className="dish-item">
            <div className="dish-image-container">
                <img className="dish-img" src={image} alt="" />
                {!cartItems[id] ? 
                    <img className="add-white" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" /> 
                : 
                    <div className="counter">
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                        {cartItems[id]}
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    </div>
                }
            </div>
            <div className="dish-info">
                <div className="dish-name-reviews">
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className="dish-discrep">{description}</p>
                <p className="dish-price">${price}</p>
            </div>
        </div>
    );
};

export default Dish;
