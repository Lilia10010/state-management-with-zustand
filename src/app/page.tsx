"use client";

import { AvailableProducts } from "@/compoonents/AvailableProducts";
import { Cart } from "@/compoonents/Cart";
import { Total } from "@/compoonents/Total";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center p-4 mt-14">
      <div className="flex max-w-7xl w-full justify-start items-center  flex-col">
        <div className="flex flex-col w-full gap-10">
          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
            <h3 className="text-3xl text-gray-100">
              State management with zustand
            </h3>
          </div>
          <div className="flex gap-4">
            <div className="grow">
              <AvailableProducts />
            </div>
            <div className="grow border border-1 border-gray-200 rounded-lg">
              <Total />
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
