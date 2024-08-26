
import carrito from '../../assets/carrito.svg';

const CartWidget = () => {
  return(
    <div>
      <img  
        src={carrito} 
        alt="imagen carrito" 
        // No es buena practica hacer esto sacarlo
        style={{ width: '50px', height: '50px' }} 
        />
      0
    </div>
  )
}
export default CartWidget