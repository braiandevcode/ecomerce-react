import PropTypes from 'prop-types';
export function CartItem({ image, title, price, quantity, addToCart }){
  return(
    <>
      <li>
        <img src={image} alt={`Imagen de producto ${title}`}/>
        <div>
          <strong>{title}</strong> - {price}
        </div>
        <footer>
          <small>Cantidad Articulos: {quantity}</small>
          <button onClick={addToCart}>+</button>
        </footer>
      </li>
    </>
  );
}


CartItem.propTypes = {
  image:PropTypes.string,
  title:PropTypes.string,
  price:PropTypes.number,
  addToCart:PropTypes.func,
  quantity:PropTypes.number
};