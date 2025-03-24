"use client";
import React, { useState } from "react";
import LegoList from "../components/ui/lego/legoList";
import { LegoSet, CartItem } from "../lib/types/types";
import Cart from "../components/ui/lego/cart";

const legoSets: LegoSet[] = [
  {
    id: "2",
    name: "Nate",
    price: 10,
    pieces: 100,
    image: "/images/lego/batmobile.jpg",
    category: "Buy Commiter",
  },
];

export default function LegoPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (set: LegoSet) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === set.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === set.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...set, quantity: 1 }];
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-yellow-500">
        Buy Commiter for sale
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="lg:col-span-2">
          <LegoList sets={legoSets} onAddToCart={addToCart} />
        </div>
        <div className="lg:col-span-2">
          <Cart items={cartItems} />
        </div>
      </div>
    </div>
  );
}
