import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [shownCart, setShownCart] = useState(false);
  const showCart = () => {
    setShownCart(true);
  };
  const unshowCart = () => {
    setShownCart(false);
  };
  return (
    <CartProvider>
      {shownCart && <Cart errorHandler={unshowCart}></Cart>}
      <Header onShowCart={showCart}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
