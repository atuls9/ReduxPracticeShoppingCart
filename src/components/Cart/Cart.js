import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {!!items.length > 0 && (
        <ul>
          {items.map((el) => {
            return (
              <CartItem
                title={el.title}
                quantity={el.quantity}
                total={+el.quantity * +el.price}
                price={+el.price}
                id={el.id}
              />
            );
          })}
        </ul>
      )}
    </Card>
  );
};

export default Cart;
