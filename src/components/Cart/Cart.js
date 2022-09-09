import { Fragment } from "react";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const itemList = useSelector((state) => state.cart.items);
  const cartEmpty = itemList.length === 0;
  const emptyContent = <h2>Nothing in your cart</h2>;
  return (
    <Card className={classes.cart}>
      {!cartEmpty && (
        <Fragment>
          <h2>Your Shopping Cart</h2>
          <ul>
            {itemList.map((product) => {
              return (
                <CartItem
                  key={product.id}
                  item={{
                    id: product.id,
                    title: product.title,
                    quantity: product.amount,
                    total: product.amount * product.price,
                    price: product.price,
                  }}
                />
              );
            })}
          </ul>{" "}
        </Fragment>
      )}
      {cartEmpty && emptyContent}
    </Card>
  );
};
export default Cart;
