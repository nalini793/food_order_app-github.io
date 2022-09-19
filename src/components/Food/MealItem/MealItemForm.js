import classes from "./MealItemForm.module.css";

import { useContext, useState } from "react";
import CartContext from "../../../store-context/cart-context";

const MealItemForm = (props) => {
  const [itemQty, setItemQty] = useState(0);
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;
  let existingCartItem = {
    // amount: 0,
  };

  if (hasItems) {
    const existingCartItemIndex = cartCtx.items.findIndex(
      (item) => item.id === props.id
    );
    // console.log(props.id);
    existingCartItem = cartCtx.items[existingCartItemIndex];
  }

  const increaseQty = () => {
    setItemQty(itemQty + 1);
    props.onAddToCart(1);
  };
  const decreaseQty = () => {
    if (itemQty > 0) {
      setItemQty(itemQty - 1);
      props.onRemove();
    }
  };

  return (
    <div className={classes.form}>
      <button onClick={decreaseQty} className={classes.button}>
        -
      </button>
      {existingCartItem ? <p>{existingCartItem.amount}</p> : <p> </p>}
      <button onClick={increaseQty} className={classes.button}>
        +
      </button>
    </div>
  );
};

export default MealItemForm;
