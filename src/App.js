import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";
import { cartActions } from "./store/cart-slice";

const url =
  "https://movie-database-4me-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

let initRun = true;

function App() {
  const dispatch = useDispatch();
  const cartShow = useSelector((state) => state.ui.show);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error loading data");
      }
      const data = await response.json();
      console.log(data);
      if (data) {
        dispatch(cartActions.replaceCart(data));
      }
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    const sendData = async () => {
      dispatch(
        uiActions.setNotification({
          status: "Pending",
          title: "Preparing",
          message: "Preparing to sending data...",
        })
      );
      const response = await fetch(url, {
        method: "PUT",
        body: JSON.stringify(cart),
      });
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      // success
      dispatch(
        uiActions.setNotification({
          status: "success",
          title: "Success!",
          message: "Sent data successfully",
        })
      );
    };
    // check first run
    if (initRun) {
      initRun = false;
      return;
    }

    sendData().catch((error) => {
      dispatch(
        uiActions.setNotification({
          status: "error",
          title: "Error",
          message: "Fails to sending data...",
        })
      );
    });
  }, [cart, dispatch]);

  const notificationMsg = useSelector((state) => state.ui.notification);
  return (
    <Fragment>
      {notificationMsg && (
        <Notification
          status={notificationMsg.status}
          title={notificationMsg.title}
          message={notificationMsg.message}
        />
      )}
      <Layout>
        {cartShow && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
