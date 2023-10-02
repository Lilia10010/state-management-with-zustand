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
          className="flex gap-4 items-center justify-start p-4"
        >
          <span className="">{item.name}</span>
          <span className="">{formatPrice(item.price)}</span>
          <button
            onClick={() => addToCart(item)}
            className="border border-1 border-gray-200 p-2 text-primary-300 rounded-md"
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};
