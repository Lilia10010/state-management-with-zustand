import { useCartStore } from "@/store/Cardstore";

export const Total = () => {
  const items = useCartStore((state) => state.cart);

  const sum = items.reduce((acc, item) => acc + item.price, 0);
  const formattedSum = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(sum);

  return (
    <div className="w-full bg-red-600 flex flex-col items-center justify-center p-4">
      <h3 className="text-2xl font-bold px-4 py-2 mt-4 text-white bg-blue-600 rounded-md">
        Total price of cart {formattedSum}
      </h3>
    </div>
  );
};
