"use client";
import { Car } from "@/app/lib/types/types";
import React from "react";

type Props = {
  cars: Car[];
};

const CarList = ({ cars }: Props) => {
  return (
    <div>
      {cars.map((car, index) => (
        <div
          key={index}
          className="p-4 shadow hover:cursor-pointer bg-white text-gray-900 mb-4 rounded-lg"
        >
          <h2 className="font-bold text-2xl">Card: {car.name}</h2>
          <h2>{car.type}</h2>
          <h2>{car.color}</h2>
          <h2>{car.motor.serialNumber}</h2>
          <h2>{car.motor.hp}</h2>
        </div>
      ))}
    </div>
  );
};

export default CarList;
