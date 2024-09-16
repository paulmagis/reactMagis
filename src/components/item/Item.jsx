import styles from './Item.module.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Item ({ product }) {
  return (
    <div className={styles.itemContainer}>
      <Link to={`/products/${product.id}`}>
        <p>{product.contenidoEstrucural}</p>
        <p>{product.contenidoEspecifico}</p>
        <p>{product.price}</p>
      </Link>
      <Button variant="outline-info">Add to cart</Button>
    </div>
  )
}

export default Item;
