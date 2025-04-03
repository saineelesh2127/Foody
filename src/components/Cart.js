import ItemList from "./ItemList";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.items);

  const dispatch = useDispatch();
  const handleclear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Shopping Cart</h1>
      <button
        onClick={handleclear}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
      >
        Clear Cart
      </button>
      {cartItems.length > 0 ? (
        <div className="border-t pt-4">
          <ItemList items={cartItems} />
        </div>
      ) : (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
