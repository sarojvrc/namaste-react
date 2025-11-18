import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-xl">Cart Page</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-black text-white cursor-pointer rounded-xl"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length == 0 ? (
          <h4>No items in the cart</h4>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
