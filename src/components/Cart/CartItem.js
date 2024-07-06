import React from "react";

const CartItem = (props) => {
  const price = `${props.price},000`;
  return (
    <li className="cart__item">
      <img src={props.image} alt={props.title} className="cart__item--image" />
      <span className="cart__item--info">
        {props.quantity} x {props.title}
      </span>
      <span className="cart__item--price">{price}</span>
    </li>
  );
};

export default CartItem;
