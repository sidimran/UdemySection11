import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import cartContext from "../../Store/cart-context";
const MealItems = (props) => {
  const cartctx =useContext(cartContext)

  const price = `$${props.price.toFixed(2)}`;

  const addTocarthandler =(amount) =>{
    cartctx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })

  }
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div></div>
      <MealItemForm id={props.id} onAddTocart ={addTocarthandler}   />
    </li>
  );
};

export default MealItems;
