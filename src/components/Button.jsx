import { Link } from 'react-router-dom';

function Button({ label, color, callback, to }) {
  return (
    <Link to={to}>
      <button 
        style={{ backgroundColor: color }}
        onClick={callback}
      >
        {label} 
      </button>
    </Link>
  );
}

export default Button;
