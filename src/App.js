import { Fragment, useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cartprovider from "./components/Store/Cartprovider";
import card from "./components/UI/Card";

const App = () => {
  const [cartIsShow, setCartIsShow] = useState(false);

  const showCartHandler = () => {
    setCartIsShow(true);
  };

  const hideCartHandler = () => {
    setCartIsShow(false);
  };
  return (
    <Cartprovider>
      {cartIsShow && <Cart  onClose ={hideCartHandler}/>}
      <Header  onShowCart ={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </Cartprovider>
  );
};

export default App;
