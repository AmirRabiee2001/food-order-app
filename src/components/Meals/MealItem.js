import React, { useContext, useState } from "react";
import CartContext from "../../context/cart-context";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import MealView from "./MealView";
import useModal from "../../hooks/useModal";

const MealItem = (props) => {
  // Use cart context
  const cartCtx = useContext(CartContext);
  // State for the selected number of a meal
  const [inputValue, setInputValue] = useState(0);
  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
  };
  // Add item to cart
  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.title,
      amount: 1,
      price: props.price,
      image: props.image,
    });
    // Update input value
    setInputValue(inputValue + 1);
  };
  // Remove from cart
  const removeFromCartHandler = () => {
    cartCtx.removeItem(props.id);
    setInputValue(inputValue - 1);
  };

  const [mealViewIsShown, onShowMealView, onHideMealView] = useModal();

  // Format price for display
  const price = `تومان ${props.price}،000`;

  return (
    <div className="meal-item">
      {mealViewIsShown && (
        <MealView onHideMealView={onHideMealView} mealViewID={props.id} />
      )}

      <div className="meal-item__head" onClick={onShowMealView}>
        <div className="meal-item__info">
          <h3 className="meal-item__title">{props.title}</h3>
          <p>{props.rating} &#9733;</p>
        </div>
        <img src={props.image} alt={props.title} className="meal-item__img" />
      </div>
      <form action="#" className="meal-item__form">
        <span className="meal-item__price">{price}</span>
        {/* display button when selected amount is zero */}
        {inputValue === 0 && (
          <button className="meal-item__btn" onClick={addToCartHandler}>
            افزودن
          </button>
        )}
        {/* display form if selected amount not zero */}
        {inputValue !== 0 && (
          <form
            className="meal-item__custom-num meal-item__btn"
            action="#"
            id={props.id}
          >
            <FaChevronLeft onClick={removeFromCartHandler} />
            <input
              type="number"
              className="meal-item__custom-num__input"
              name={props.title}
              form={props.id}
              min={1}
              max={10}
              value={inputValue}
              onChange={inputValueHandler}
            />
            <FaChevronRight onClick={addToCartHandler} />
          </form>
        )}
      </form>
    </div>
  );
};

export default MealItem;
