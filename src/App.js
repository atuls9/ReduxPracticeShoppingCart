import { useEffect } from "react";
import axios from "axios";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { notificationActions } from "./store/Notification";
import Notification from "./components/UI/Notification";

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.cart.show);
  const notification = useSelector((state) => state.notification.notification);

  const cart = useSelector((state) => state.cart.items);
  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    const sendData = async () => {
      dispatch(
        notificationActions.showNotification({
          status: "pending",
          title: "sending...",
          message: "Sending product data",
        })
      );
      const res = await axios.put(
        "https://shoppingcartredux-default-rtdb.firebaseio.com/cart.json",
        cart
      );
      if (!res.request.statusText) {
        dispatch(
          notificationActions.showNotification({
            status: "Error",
            title: "Error!!",
            message: "Sent cart data failed..",
          })
        );
        console.log("ok faileddsfadfasfd");
        console.log(res.request.statusText);
        throw new Error("sending data failed.");
      }

      dispatch(
        notificationActions.showNotification({
          status: "Success",
          title: "Success!!",
          message: "Sent cart data successfully..",
        })
      );
      // const resData = await res.data;
    };
    sendData().catch((error) => {
      dispatch(
        notificationActions.showNotification({
          status: "Error",
          title: "Error!!",
          message: "Sent cart data failed..",
        })
      );
    });
  }, [cart, dispatch]);

  return (
    <>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
