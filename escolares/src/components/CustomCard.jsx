import React from 'react';

const CustomCard = ({ imagen, titulo }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105">
      <img 
        src={imagen} 
        alt={titulo} 
        className="w-[100%] h-36 object-cover"
      />
      <div className="p-4">
        <h5 className="text-xl font-bold mb-2">{titulo}</h5>
        <p className="text-sm text-gray-600">
          Lizards are a widespread group of squamate reptiles, with over 6,000 species,
           ranging across all continents except Antarctica.
        </p>
      </div>
    </div>
  );
};

export default CustomCard;
