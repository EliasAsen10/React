export type Car = {
    name: string;
    type: string;
    color: string;
    motor: {
        serialNumber: number;
        hp: number;
    }
} 
export type Truck = {
    name: string;
    type: string;
    color: string;
    cargo: {
        capacity: number;
        type: string;
    }
}


// Add the CartItem type export
export type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
};