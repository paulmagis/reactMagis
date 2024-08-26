import CartWidget from "../CartWidget/cartwidget";
const NavBar = () => {
  return (
    <nav>
      <h3>Constructora Nombre</h3>
      <div>
        <button>Proyectos</button>
        <button>Baños</button>
        <button>Cocinas</button>
        <button>Servicios</button>
      </div>
      <CartWidget/>
    </nav>
  );
}
export default NavBar;
