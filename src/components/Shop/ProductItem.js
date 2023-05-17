import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart";

const ProductItem = (props) => {
  let title = props.title;
  let price = props.price;
  let description = props.description;
  let id = props.id;
  const dispatch = useDispatch();
  const addItem = (title, id, price, description) => {
    const item = {
      id: id,
      key: id,
      title: title,
      price: +price,
      description: description,
      quantity: 1,
    };

    dispatch(cartActions.addItems(item));
  };
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={() => addItem(title, id, price, description)}>
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
