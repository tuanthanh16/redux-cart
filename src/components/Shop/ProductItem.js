import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { cartActions } from "../../store/cart-slice";
import { useDispatch } from "react-redux";

const ProductItem = (props) => {
  const { id, title, price, description } = props;
  const dispatch = useDispatch();
  const clickHandle = () => {
    const data = {
      id,
      title,
      price,
      description,
      amount: 1,
    };
    dispatch(cartActions.addItems(data));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={clickHandle}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
