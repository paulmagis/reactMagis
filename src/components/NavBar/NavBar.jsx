import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from "../CartWidget/cartwidget";
import { products } from '../../data/products'; // Importa los productos

const NavBar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false); // Estado para mostrar u ocultar el desplegable

  // Obtener los ejes únicos de los productos
  const uniqueEjes = [...new Set(products.map(product => product.ejes))];

  // Función para alternar el estado del menú desplegable
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav>
      <h3>Proyecto Programa Primaria</h3>
      <div>
        <Link to="/">Inicio</Link>

        {/* Menú desplegable para categorías */}
        <div className="dropdown">
          <button className="dropbtn" onClick={toggleDropdown}>Categorías</button>
          
          {/* Desplegable condicional */}
          {isDropdownVisible && (
            <div className="dropdown-content">
              {uniqueEjes.map((ejes, index) => (
                <Link 
                  key={index}
                  to={`/categorias/${ejes}`}
                  onClick={toggleDropdown} // Cerrar el desplegable al hacer clic en un enlace
                >
                  {ejes}
                </Link>
              ))}
            </div>
          )}
        </div>
        
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;



