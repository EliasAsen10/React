"use client";
import Image from "next/image";
import React from "react";

type Props = {
    type: string;
};

const TruckImage = ({ type }: Props) => {
    const getImagePath = (truckType: string) => {
        switch (truckType.toLowerCase()) {
            case 'volvo fh16':
                return '/images/trucks/volvo.jpg';
            case 'scania r730':
                return '/images/trucks/scania.jpg';
            case 'mercedes actros':
                return '/images/trucks/mercedes.jpg';
            default:
                return '/images/trucks/default.jpg';
        }
    };

    return (
        <Image
            src={getImagePath(type)}
            alt={`${type} truck`}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            priority
        />
    );
};

export default TruckImage;