import { formatPrice } from "@/utils";
import { useCartStore } from "@/store/Cardstore";

export const Cart = () => {
  const [items, removeFromCart] = useCartStore((state) => [
    state.cart,
    state.removeFromCart,
  ]);

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 min-h-[]">
      {items.length > 0 ? (
        items.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 items-center justify-start p-4"
          >
            <span className="text-orange-500 font-semibold">{item.name}</span>
            <span className="text-orange-600">{formatPrice(item.price)}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="border border-1 border-red-700 hover:text-red-700 p-2 text-primary-300 rounded-md transition-colors duration-300 ease-in-out"
            >
              Remove from cart
            </button>
          </div>
        ))
      ) : (
        <p className="text-xl font-bold px-4 py-2 mt-4 text-gray-400">
          Your cart is empty
        </p>
      )}
    </div>
  );
};
