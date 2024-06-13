import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/Storecontext";
import Dish from "../Dish/Dish";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-dishes-list">
        {food_list.map((dish, index) => {
          if (category === "All") {
            return (
              <Dish
                key={index}
                id={dish._id}
                name={dish.name}
                image={dish.image}
                price={dish.price}
                description={dish.description}
              />
            );
          } else if (category === dish.category) {
            return (
              <Dish
                key={index}
                id={dish._id}
                name={dish.name}
                image={dish.image}
                price={dish.price}
                description={dish.description}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
