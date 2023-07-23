import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <Link to="/programacao">
      <div className="flex items-center p-10">
        <h1 className="text-2xl">Take me to About Page</h1>
        <button class Name="bg-blue-500 px-4 text-white ml-4 rounded-full">
          Programacao
        </button>
      </div>
    </Link>
  );
}
