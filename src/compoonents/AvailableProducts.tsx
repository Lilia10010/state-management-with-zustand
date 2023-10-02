import { formatPrice } from "@/utils";
import { useCartStore } from "@/store/Cardstore";

export const AvailableProducts = () => {
  const [items, addToCart] = useCartStore((state) => [
    state.availableItems,
    state.addToCart,
  ]);

  return (
    <div className="flex flex-col">
      <h3 className="text-gray-200 text-xl">Add to cart</h3>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex gap-4 items-center justify-between md:justify-start p-4"
        >
          <span className="text-orange-500 font-semibold">{item.name}</span>
          <span className="text-orange-600">{formatPrice(item.price)}</span>
          <button
            onClick={() => addToCart(item)}
            className="border border-1 border-green-600 hover:text-green-600 p-2 text-primary-300 rounded-md transition-colors duration-300 ease-in-out"
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};
