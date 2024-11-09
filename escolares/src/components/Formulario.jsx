// src/Formulario.js
import React, { useState } from 'react';
import './form.css';  // Asegúrate de que el CSS esté en la misma carpeta o ajusta la ruta
import htmlContent from "./formulario.html"
import { useNavigate } from 'react-router-dom';
const Formulario = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    activity: '',
    observations: '',
  });

  const navigate = useNavigate()

  const handleClases = () => {
    navigate("/clases")
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
  };

  return (
    <div className="containerxd body-formulario">
      <div className="raya"></div>
      <div className="register-container">
        <div className="register-form">
          <h1>Registra la actividad</h1>
          <div className="separator">Completa la actividad</div>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="name-container">
              <div className="name">
                <label htmlFor="name" className="name">Nombre y apellido</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  minLength="3"
                  placeholder="Ingresa tu nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>

            <label htmlFor="date" className="user">Fecha</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
            
            <label htmlFor="activity">Actividad</label>
            <select
              id="activity"
              name="activity"
              className="form-select"
              aria-label="Selecciona una actividad"
              value={formData.activity}
              onChange={handleChange}
            >
              <option value="">Seleccionar la actividad</option>
              <option value="Apicultura">Apicultura</option>
              <option value="Ganadería">Ganadería</option>
              <option value="Huerta">Huerta</option>
            </select>

            <div className="mb-3">
              <label htmlFor="observations" className="form-label">Observaciones</label>
              <textarea
                className="form-control"
                id="observations"
                name="observations"
                rows="3"
                placeholder="Describa las observaciones que obtuviste"
                value={formData.observations}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="button" className="button-agregar">Agregar campo</button>
            <button type="submit" className="button-register" onClick={handleClases}>Registrar datos</button>
          </form>
        </div>
      </div>
    </div>
    // <iframe style={{width:"500px", height:"500px"}}  src={"./formulario.html"} />
  );
};

export default Formulario;
