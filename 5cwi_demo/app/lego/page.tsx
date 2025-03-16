"use client";
import React, { useState } from "react";
import LegoList from "../components/ui/lego/legoList";
import { LegoSet, CartItem } from "../lib/types/types";
import Cart from "../components/ui/lego/cart";

const legoSets: LegoSet[] = [
  {
    id: 1,
    name: "Millennium Falcon",
    price: 49.99,
    pieces: 1000,
    image: "/images/lego/falcon.jpg",
    category: "Star Wars",
  },
  {
    id: 2,
    name: "Batmobile",
    price: 29.99,
    pieces: 750,
    image: "/images/lego/batmobile.jpg",
    category: "DC",
  },
  {
    id: 3,
    name: "Death Star",
    price: 89.99,
    pieces: 2000,
    image: "/images/lego/deathstar.jpg",
    category: "Star Wars",
  },
];

export default function Lego() {
  const [balance, setBalance] = useState(100);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showAnimation, setShowAnimation] = useState(false);

  const addToCart = (item: LegoSet) => {
    if (balance >= item.price) {
      const audio = new Audio("/sounds/purchase.mp3");
      audio.play();

      setShowAnimation(true);
      setTimeout(() => setShowAnimation(false), 1000);

      setBalance((prev) => prev - item.price);

      setCart((prev) => {
        const existing = prev.find((i) => i.id === item.id);
        if (existing) {
          return prev.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
          );
        }
        return [...prev, { ...item, quantity: 1 }];
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-yellow-200">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-8 bg-yellow-500 p-4 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-white">LEGO Store</h1>
          <div className="text-2xl font-semibold bg-white px-6 py-2 rounded-lg shadow">
            Balance: €{balance.toFixed(2)}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <LegoList sets={legoSets} onAddToCart={addToCart} />
          </div>
          <div className="lg:col-span-1 sticky top-4">
            <Cart items={cart} />
          </div>
        </div>

        {showAnimation && (
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
            <div className="bg-green-500 text-white text-2xl p-6 rounded-xl shadow-2xl animate-bounce">
              Added to Cart! 🎉
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
