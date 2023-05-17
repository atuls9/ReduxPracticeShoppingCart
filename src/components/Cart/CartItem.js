import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const CartItem = (props) => {
  const dispatch = useDispatch();
  let title = props.title;
  let quantity = props.quantity;
  let total = props.total;
  let price = props.price;
  let id = props.id;

  const addItem = () => {
    const item = {
      title: title,
      price: +price,
      quantity: 1,
    };
    dispatch(cartActions.addItems(item));
  };
  const removeItem = (title) => {
    dispatch(cartActions.removeItem(title));
  };

  return (
    <li className={classes.item} key={id}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>{price}/item</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={() => removeItem(id)}> -</button>
          <button onClick={() => addItem(title, price)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
