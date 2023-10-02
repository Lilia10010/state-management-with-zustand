import { create } from "zustand";

const initialItems = [
  { id: 1, name: "Item 1", price: 10 },
  { id: 2, name: "Item 2", price: 20 },
  { id: 3, name: "Item 3", price: 30 },
  { id: 4, name: "Item 4", price: 40 },
  { id: 5, name: "Item 5", price: 50 },
];

interface Item {
  id: number;
  name: string;
  price: number;
}

type CartStore = {
  availableItems: Item[];
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: number) => void;
};

export const useCartStore = create<CartStore>((set) => {
  return {
    cart: [],
    availableItems: initialItems,
    addToCart: (item: Item) => {
      set((state) => ({
        cart: [...state.cart, item],
        availableItems: state.availableItems.filter((i) => i.id !== item.id),
      }));
    },

    removeFromCart: (id: number) => {
      set((state) => {
        const itemToRemove = (state.cart || []).find((item) => item.id === id);

        if (itemToRemove) {
          return {
            cart: state.cart.filter((item) => item.id !== id),
            availableItems: [...state.availableItems, itemToRemove],
          };
        }

        return state;
      });
    },
  };
});
