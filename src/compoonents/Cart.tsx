import { useCartStore } from "@/store/Cardstore";

export const Cart = () => {
  const [items, removeFromCart] = useCartStore((state) => [
    state.cart,
    state.removeFromCart,
  ]);

  return (
    <div className="w-full bg-red-600 flex flex-col items-center justify-center p-4">
      <h3 className="text-2xl font-bold px-4 py-2 mt-4 text-white bg-blue-600 rounded-md">
        Cart
      </h3>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center p-4"
        >
          <h3 className="text-2xl font-bold">{item.name}</h3>
          <p className="text-xl font-bold">{item.price}</p>
          <button
            onClick={() => removeFromCart(item.id)}
            className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-md"
          >
            Remove from cart
          </button>
        </div>
      ))}
    </div>
  );
};
