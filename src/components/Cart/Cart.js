import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);

  return (
    <Card className={classes.cart}>
      {cart.length > 0 ? (
        <>
          <h2>Your Shopping Cart</h2>
          <ul>
            {cart.map((cart_item) => {
              return (
                <CartItem
                  item={{
                    id: cart_item.id,
                    title: cart_item.title,
                    quantity: cart_item.quantity,
                    price: cart_item.price,
                  }}
                  key={cart_item.id}
                />
              );
            })}
          </ul>
        </>
      ) : (
        <h2>Cart is empty.</h2>
      )}
    </Card>
  );
};

export default Cart;
