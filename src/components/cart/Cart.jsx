import { useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import cartContext from "../Store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartctx = useContext(cartContext);
  const totalAmount = `$${cartctx.totalAmount.toFixed(2)}`;
  const hasItems = cartctx.items.length > 0;

  const cartItemRemoveHandler = () => {};

  const cartItemAddHandler = (item) => {
    cartctx.addItem({...item,amount:1});
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {" "}
      {cartctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItems}

      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
