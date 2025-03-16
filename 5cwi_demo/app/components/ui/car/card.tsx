"use client";

import { Car } from '@/app/lib/types/types';
import React, { useState } from 'react'

type Props = { car: Car }

export default function Card({ car }: Props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={`p-4 shadow hover:cursor-pointer ${isActive ? "bg-amber-200" : "bg-gray-200"}`} onClick={() => {
            setIsActive(!isActive);
        }}>
        
            <h2 className='font-bold text-2xl'>Card:{car.name}</h2>
            <h2>{car.type}</h2>
            <h2>{car.color}</h2>
            <h2>{car.motor.serialNumber}</h2>
            <h2>{car.motor.hp}</h2>
            {isActive ? "active" : "inactive"}
        </div>
    )
}