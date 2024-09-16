
import { useState } from 'react';
import { Link } from 'react-router-dom';

function ItemCount() {
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const handleIncrease = () => setCount(count + 1);

  // Función para decrementar el contador
  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
      <p>{count}</p>
      {/* Link para ir al carrito después de agregar */}
      <Link to="/cart">
        <button>Agregar al carrito</button>
      </Link>
    </div>
  );
}

export default ItemCount;
