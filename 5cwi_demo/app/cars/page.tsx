import React from "react";
import CarList from "../components/ui/car/carList";
import { Car } from "../lib/types/types";

const cars: Car[] = [
  {
    name: "Super Car",
    type: "Ferrari",
    color: "red",
    motor: {
      serialNumber: 2344,
      hp: 200,
    },
  },
  {
    name: "Mega Car",
    type: "RedBull",
    color: "blue&white",
    motor: {
      serialNumber: 1134,
      hp: 200,
    },
  },
  {
    name: "Ultra car",
    type: "McLaren",
    color: "orange",
    motor: {
      serialNumber: 1234,
      hp: 200,
    },
  },
];

export default function Cars() {
  return (
    <div className="text-gray-900">
      <CarList cars={cars} />
    </div>
  );
}
