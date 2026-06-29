import React from "react";

const Cards = ({ img, title, desc, btn }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
      <img src={img} alt="Card" className="w-full h-52 object-cover" />

      <div className="p-5">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>

        <p className="mt-2 text-gray-600">{desc}</p>

        <div className="mt-4">{btn}</div>
      </div>
    </div>
  );
};

export default Cards;
