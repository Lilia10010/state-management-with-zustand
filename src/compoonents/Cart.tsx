import { formatPrice } from "@/utils";
import { useCartStore } from "@/store/Cardstore";

export const Cart = () => {
  const [items, removeFromCart] = useCartStore((state) => [
    state.cart,
    state.removeFromCart,
  ]);

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 min-h-[300px]">
      {items.length > 0 ? (
        items.map((item) => (
          <div
            key={item.id}
            className="flex gap-4 items-center justify-start p-4"
          >
            <span className="">{item.name}</span>
            <span className="">{formatPrice(item.price)}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              className="border border-1 border-gray-200 p-2 text-primary-300 rounded-md"
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
