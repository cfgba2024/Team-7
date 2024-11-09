import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const handleLogout = () => {
    navigate("/login")
  };

  return (
    <section className="w-full bg-lime-500 p-8 flex justify-between items-center relative">
      <h2 className="text-2xl font-bold">ESCUELA RURAL N°12</h2>
      
      <div className="relative">
        <FaUser 
          className="text-2xl cursor-pointer" 
          onClick={toggleMenu} 
        />
        
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md border">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold text-gray-700">Juan Pérez</h3>
              <p className="text-sm text-gray-500">Grado: 5to Primaria</p>
            </div>
            <ul className="text-gray-800">
              <li 
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer" 
                onClick={handleLogout}
              >
                Cerrar sesión
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
