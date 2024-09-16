import Item from "./item/Item";
import { Link } from 'react-router-dom';

function ItemList({ items }) {
  return (
    <>
      {items.map(product => (
        <Link to={`/products/${product.id}`} key={product.id}>
          <Item product={product} />
        </Link>
      ))}
    </>
  );
}

export default ItemList;
