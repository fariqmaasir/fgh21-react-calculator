import React from "react";

function App() {
  return (
    <div className="flex flex-col justify-center bg-black max-w-[300px] w-full h-[490px] rounded-3xl font-bold">
      <div className="text-stone-50 text-right pt-20 pr-7 text-5xl">0</div>
      <div className="grid grid-cols-4 gap-3 p-4">
        <button className="text-black w-14 h-14 bg-gray-400 rounded-full">
          AC
        </button>
        <button className="text-black w-14 h-14 bg-gray-400 rounded-full">
          +/-
        </button>
        <button className="text-black w-14 h-14 bg-gray-400 rounded-full">
          %
        </button>
        <button className="text-stone-50 w-14 h-14 bg-orange-500 rounded-full">
          /
        </button>
        <button className="text-stone-50 w-14 h-14 bg-neutral-800 rounded-full">
          7
        </button>
        <button className="text-stone-50 w-14 h-14 bg-neutral-800 rounded-full ">
          8
        </button>
        <button className="text-stone-50 w-14 h-14 bg-neutral-800 rounded-full ">
          9
        </button>
        <button className="text-stone-50 w-14 h-14 bg-orange-500 rounded-full">
          x
        </button>
        <button className="text-stone-50 w-14 h-14 bg-neutral-800 rounded-full">
          4
        </button>
        <button className="text-stone-50 w-14 h-14 bg-neutral-800 rounded-full">
          5
        </button>
        <button className="text-stone-50 w-14 h-14 bg-neutral-800 rounded-full">
          6
        </button>
        <button className="text-stone-50 w-14 h-14 bg-orange-500 rounded-full">
          -
        </button>
        <button className="text-stone-50 w-14 h-14 bg-neutral-800 rounded-full">
          1
        </button>
        <button className="text-stone-50 w-14 h-14 bg-neutral-800 rounded-full">
          2
        </button>
        <button className="text-stone-50 w-14 h-14 bg-neutral-800 rounded-full">
          3
        </button>
        <button className="text-stone-50 w-14 h-14 bg-orange-500 rounded-full">
          +
        </button>
        <button className="flex items-center pl-6 text-stone-50 h-14 bg-neutral-800 rounded-full col-span-2">
          0
        </button>
        <button className="text-stone-50 w-14 h-14 bg-neutral-800 rounded-full ">
          .
        </button>
        <button className="text-stone-50 w-14 h-14 bg-orange-500 rounded-full">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
