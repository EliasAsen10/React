"use client";
import { Truck } from "@/app/lib/types/types";
import React from "react";
import TruckImage from "./truckImage";

type Props = {
    trucks: Truck[];
};

const TruckList = ({ trucks }: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {trucks.map((truck, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                    <div className="h-64 relative">
                        <TruckImage type={truck.type} />
                    </div>
                    <div className="p-6">
                        <h2 className="font-bold text-2xl mb-2">{truck.name}</h2>
                        <div className="space-y-1 text-gray-600">
                            <p>Type: {truck.type}</p>
                            <p>Color: {truck.color}</p>
                            <p>Capacity: {truck.cargo.capacity}kg</p>
                            <p>Cargo Type: {truck.cargo.type}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TruckList; 