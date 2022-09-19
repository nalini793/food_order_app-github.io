import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
import CartContext from "../../../store-context/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (qty) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: qty,
      price: props.price,
    });
  };
  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.form}>
          <div className={classes.price}>₹{props.price}</div>

          <MealItemForm
            showqty={props.amount}
            id={props.id}
            onRemove={cartItemRemoveHandler.bind(null, props.id)}
            onAddToCart={addToCartHandler}
            itemsArray={cartCtx.items}
          />
        </div>
      </div>

      <div className={classes.image}>
        <img src={props.image} alt={props.name}></img>
      </div>
    </li>
  );
};

export default MealItem;
