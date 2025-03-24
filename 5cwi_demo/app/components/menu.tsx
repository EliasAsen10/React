"use client";
import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <div className="bg-white">
      <ul className="flex p-4 justify-between items-center">
        <div className="flex gap-4">
          <li>
            <Link
              className="p-2 hover:bg-gray-100 rounded-2xl text-gray-900"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="p-2 hover:bg-gray-100 rounded-2xl text-gray-900"
              href="/cars"
            >
              Cars
            </Link>
          </li>
          <li>
            <Link
              className="p-2 hover:bg-gray-100 rounded-2xl text-gray-900"
              href="/lego"
            >
              Buy a Commiter
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
