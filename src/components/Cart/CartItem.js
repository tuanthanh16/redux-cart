import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { id, title, quantity, total, price } = props.item;
  const dispatch = useDispatch();
  const removeItemHandle = () => {
    dispatch(cartActions.removeItems(id));
  };
  const addItemHandle = () => {
    const item = {
      id,
      title,
      price,
      amount: 1,
    };
    dispatch(cartActions.addItems(item));
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandle}>-</button>
          <button onClick={addItemHandle}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
