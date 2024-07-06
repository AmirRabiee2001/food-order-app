import { useEffect, useReducer } from "react";
import CartContext from "./cart-context";

// Default cart state
let defaultCartState = {
  items: [],
  totalAmount: 0,
};

// Cart reducer
const cartReducer = (state, action) => {
  // INCREASE ITEM
  if (action.type === "ADD") {
    const itemToIncrease = state.items.find((item) => item.id === action.item.id);
    // If item exists
    if (itemToIncrease) {
      const updatedItems = state.items.map((item) =>
        item.id === action.item.id ? { ...item, amount: item.amount + 1 } : item
      );
      const updatedAmount = state.totalAmount + itemToIncrease.price;
      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
      // If not, add to items
    } else {
      const updatedItems = state.items.concat(action.item);
      const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
      return {
        items: updatedItems,
        totalAmount: updatedAmount,
      };
    }

    // DECREASE AMOUNT
  } else if (action.type === "REMOVE") {
    const itemToDecrease = state.items.find((item) => item.id === action.id);
    let updatedItems;
    // If item amount is reduced to 1, remove from cart
    if (itemToDecrease.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
      // else, just reduce the amount by 1
    } else {
      updatedItems = state.items.map((item) => (item.id === action.id ? { ...item, amount: item.amount - 1 } : item));
    }
    const updatedAmount = state.totalAmount - itemToDecrease.price;
    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  } else if (action.type === "SET") {
    return {
      items: action.cart.items,
      totalAmount: action.cart.totalAmount,
    };
  }
  return state;
};

// Cart provider
const CartProvider = (props) => {
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      dispatchCartAction({ type: "SET", cart: savedCart });
      defaultCartState = savedCart;
    }
  }, []);

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  // Dispatch function to add passed item
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
    localStorage.setItem("cart", JSON.stringify(cartState));
  };
  // Dispatch function to remove passed id
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
    localStorage.setItem("cart", JSON.stringify(cartState));
  };
  // Cart context
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
