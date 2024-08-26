
import {useState} from 'react'
function ItemCount () {
  const[count, setCount]= useState(0)
  return (
    <div>
      <button onClick>+</button>
      <button>-</button>
      <p>{count}</p>
      <button>agregar al carrito</button>
    </div>
  )
}
export default ItemCount