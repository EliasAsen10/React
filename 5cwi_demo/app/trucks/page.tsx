import TruckList from "../components/ui/truck/truckList";
import { Truck } from "../lib/types/types";

const trucks: Truck[] = [
  {
    name: "Heavy Hauler",
    type: "Volvo FH16",
    color: "silver",
    cargo: {
      capacity: 40000,
      type: "General",
    },
  },
  {
    name: "Mountain Master",
    type: "Scania R730",
    color: "red&black",
    cargo: {
      capacity: 35000,
      type: "Container",
    },
  },
  {
    name: "Road King",
    type: "Mercedes Actros",
    color: "white",
    cargo: {
      capacity: 38000,
      type: "Refrigerated",
    },
  },
];

export default function Trucks() {
  return (
    <div className="text-gray-900">
      <TruckList trucks={trucks} />
    </div>
  );
}
