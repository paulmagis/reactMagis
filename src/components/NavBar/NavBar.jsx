import CartWidget from "../CartWidget/cartwidget";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <h3>Proyecto Programa Primaria</h3>
      <div>
        <Link to="/proyectos">
          <button>Proyectos</button>
        </Link>
        <Link to="/banos">
          <button>Baños</button>
        </Link>
        <Link to="/cocinas">
          <button>Cocinas</button>
        </Link>
        <Link to="/servicios">
          <button>Servicios</button>
        </Link>
      </div>
      <CartWidget />
    </nav>
  );
}

export default NavBar;

