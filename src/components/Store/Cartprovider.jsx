import cartContext from "./cart-context";

const Cartprovider = (props) => {
  const additemToCartHandler = () => {};

  const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    item: [],
    totalAmount: 0,
    addItem: { additemToCartHandler },
    removeItem: { removeItemFromCartHandler },
  };

  return (
    <cartContext.Provider value={cartContext}>
      {props.children}
    </cartContext.Provider>
  );
};

export default Cartprovider;
