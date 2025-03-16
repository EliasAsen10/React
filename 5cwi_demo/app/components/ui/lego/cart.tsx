"use client";
import { CartItem } from "@/app/lib/types/types";
import React from "react";

type Props = {
    items: CartItem[];
};

const Cart = ({ items }: Props) => {
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 border-4 border-yellow-500">
            <h2 className="text-2xl font-bold mb-6 text-yellow-500">Shopping Cart</h2>
            {items.length === 0 ? (
                <div className="text-center py-8">
                    <p className="text-gray-500 text-lg">Your cart is empty</p>
                    <p className="text-gray-400 mt-2">Add some awesome LEGO sets!</p>
                </div>
            ) : (
                <>
                    <div className="space-y-4">
                        {items.map((item) => (
                            <div key={item.id} 
                                className="flex justify-between items-center border-b-2 border-gray-100 pb-4"
                            >
                                <div>
                                    <h3 className="font-bold text-gray-800">{item.name}</h3>
                                    <p className="text-sm text-gray-500">
                                        Quantity: {item.quantity}
                                    </p>
                                </div>
                                <span className="font-bold text-yellow-500">
                                    €{(item.price * item.quantity).toFixed(2)}
                                </span>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 pt-4 border-t-2 border-yellow-500">
                        <div className="flex justify-between items-center text-2xl font-bold">
                            <span>Total:</span>
                            <span className="text-yellow-500">€{total.toFixed(2)}</span>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart; 