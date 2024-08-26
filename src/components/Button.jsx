function Button({label, color, callback }) {
    return (
      <button 
        style={{backgroundColor: color}}
        onClick={callback}
        >
        {label}
      </button>
    )
}
export default Button