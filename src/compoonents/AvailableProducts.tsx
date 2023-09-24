import { useCartStore } from "@/store/Cardstore";

export const AvailableProducts = () => {
  const [items, addToCart] = useCartStore((state) => [
    state.availableItems,
    state.addToCart,
  ]);

  return (
    <>
      <h3 className="text-2xl font-bold px-4 py-2 mt-4 text-white bg-blue-600 rounded-md">
        Add to cart
      </h3>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center justify-center p-4"
        >
          <h3 className="text-2xl font-bold">{item.name}</h3>
          <p className="text-xl font-bold">{item.price}</p>
          <button
            onClick={() => addToCart(item)}
            className="px-4 py-2 mt-4 text-white bg-blue-600 rounded-md"
          >
            Add to cart
          </button>
        </div>
      ))}
    </>
  );
};
