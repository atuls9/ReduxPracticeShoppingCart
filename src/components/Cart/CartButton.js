import classes from "./CartButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

const CartButton = () => {
  const items = useSelector((state) => state.cart.items);
  let total = 0;
  if (items.length) {
    total = items.reduce((acc, curr) => acc + +curr.quantity, 0);
    console.log("totla", total);
  }
  const dispatch = useDispatch();

  const toggleCart = () => {
    dispatch(cartActions.showCart());
  };
  return (
    <button className={classes.button} onClick={toggleCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{total}</span>
    </button>
  );
};

export default CartButton;
