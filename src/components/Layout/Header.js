import styles from "./Header.module.css";
import mealsImg from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <div>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onShowCartButton={props.onShowCart}>Carts</HeaderCartButton>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImg} alt="food" />
      </div>
    </div>
  );
}

export default Header;
