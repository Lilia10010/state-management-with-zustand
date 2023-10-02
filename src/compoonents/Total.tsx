import { useCartStore } from "@/store/Cardstore";

export const Total = () => {
  const items = useCartStore((state) => state.cart);

  const sum = items.reduce((acc, item) => acc + item.price, 0);
  const formattedSum = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(sum);

  return (
    <div className="w-full flex flex-col items-center justify-center p-4 border-b-2 border-gray-200">
      <h3 className="text-2xl font-bold px-4 py-2 mt-4 text-white">
        Total price of cart {formattedSum}
      </h3>
    </div>
  );
};
