import { useContext } from "react";
import CartIcon from "../../components/cart/CartIcon";
import classes from "../../components/Layout/HeaderCartButton.module.css";
import cartContext from "../Store/cart-context";

const HeaderCartButton = (props) => {

  const cartCtx = useContext(cartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
    return curNumber +item.amount;
  },0)

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
