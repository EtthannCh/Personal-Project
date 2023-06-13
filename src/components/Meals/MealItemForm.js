import { useRef, useState } from "react";
import Input from "../UI/Input";
import styles from "./MealItemForm.module.css";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState("");
  const amountInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    if (
      enteredAmount.trim().length === 0 ||
      +enteredAmount < 1 ||
      +enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(+enteredAmount);
  };
  return (
    <form action="" className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        type="text"
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>

      {!amountIsValid && <p>Please enter valid amount</p>}
    </form>
  );
}

export default MealItemForm;
