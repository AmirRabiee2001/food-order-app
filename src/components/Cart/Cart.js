import { FaMapLocationDot } from "react-icons/fa6";
import { FaShoppingBasket } from "react-icons/fa";
import CartItem from "./CartItem";
import { useContext } from "react";
import CartContext from "../../context/cart-context";
import useToggle from "../../hooks/useToggle";
import useModal from "../../hooks/useModal";
import Login from "../User/Login";

const Cart = (props) => {
  // Use cart context
  const cartCtx = useContext(CartContext);
  // Keep track of cart items by multiplying each by amount
  const numOfCartItem = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  // Check of cart is empty for conditional rendering
  const isCartEmpty = cartCtx.items.length === 0;

  // Toggle cart
  const [cartIsShown, setCartIsShown] = useToggle();
  // Login modal
  const [userLoginIsShown, onShowLogin, onHideLogin] = useModal();

  return (
    // Dynamic class to open and close cart
    <div className={`cart ${cartIsShown ? "cart--active" : ""}`}>
      {userLoginIsShown && <Login onHideLogin={onHideLogin} />}
      <header className="cart__header">
        <div className="cart__icon-box" onClick={setCartIsShown}>
          <FaShoppingBasket />
          <span className="cart__icon-box--notif">{numOfCartItem}</span>
        </div>
        <div className="cart__user" onClick={onShowLogin}>
          <div className="cart__user--icon"></div>
          <span className="cart__user--name">ورود به حساب</span>
        </div>
      </header>
      <div className="cart__container">
        <h3>سفارش شما</h3>
        <div className="underline"></div>
        <ul className="cart__orders">
          {cartCtx.items.map(
            (item) =>
              item.amount !== 0 && (
                <CartItem
                  key={item.id}
                  title={item.name}
                  price={item.price}
                  quantity={item.amount}
                  image={item.image}
                />
              )
          )}
        </ul>
        <div className="underline-dotted"></div>
        {!isCartEmpty && (
          <div className="cart__delivery-info">
            <div className="cart__delivery-info--location">
              <FaMapLocationDot />
            </div>
            <div className="cart__delivery-info--estimate">
              <span>ارسال</span>
              <span>20-30 دقیقه</span>
            </div>
            <span className="cart__delivery-info--price">30,000 تومان</span>
          </div>
        )}
        {!isCartEmpty && (
          <div className="cart__total">
            <span>:هزینه کل</span>
            <span>{`${cartCtx.totalAmount},000 تومان`}</span>
          </div>
        )}
        <button
          className={`cart__checkout ${
            isCartEmpty ? "cart__checkout--disabled" : ""
          }`}
        >
          تسویه حساب
        </button>
      </div>
    </div>
  );
};

export default Cart;
