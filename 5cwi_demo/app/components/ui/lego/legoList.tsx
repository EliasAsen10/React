"use client";
import { LegoSet } from "@/app/lib/types/types";
import Image from "next/image";
import React from "react";

type Props = {
  sets: LegoSet[];
  onAddToCart: (set: LegoSet) => void;
};

const LegoList = ({ sets, onAddToCart }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {sets.map((set) => (
        <div
          key={set.id}
          className="bg-black rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
        >
          <div className="relative h-96">
            <Image
              src={set.image}
              alt={set.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded-full font-semibold">
              €{set.price}
            </div>
          </div>
          <div className="p-6 bg-gradient-to-b from-gray-900 to-black">
            <h3 className="text-2xl font-bold mb-2 text-white">{set.name}</h3>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center gap-2">
                <span className="text-white">●</span>
                Category: {set.category}
              </p>
              <p className="flex items-center gap-2">
                <span className="text-white">●</span>
                Commits: {set.pieces} a day
              </p>
            </div>
            <button
              onClick={() => onAddToCart(set)}
              className="mt-4 w-full bg-white hover:bg-gray-200 text-black px-6 py-3 rounded-xl font-bold transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LegoList;
