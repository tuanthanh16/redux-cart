import classes from "./CartButton.module.css";
import { useDispatch } from "react-redux/es/exports";
import { uiActions } from "../../store/ui-slice";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const dispatch = useDispatch();

  const clickHandle = () => {
    dispatch(uiActions.toggle());
  };
  return (
    <button onClick={clickHandle} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
      <span className={classes.badge}>${totalAmount.toFixed(2)}</span>
    </button>
  );
};

export default CartButton;
