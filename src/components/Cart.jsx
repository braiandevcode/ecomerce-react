import { useId } from 'react';
import { CartIcon, ClearCartIcon } from './Icons';
import '../styleComponents/Cart.css';
import { useCart } from '../hooks/useCart';
import { CartItem } from './CartItem';
export function Cart(){
  const cartCheckboxId = useId();
  const { addToCart, clearToCart, cart } = useCart();
  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
    
      <aside className='cart'>
        <ul>
          {
            cart.map(product => {
              return <CartItem 
                key={product.id}
                addToCart={()=> addToCart(product)} 
                {...product}
              />;
            })
          }
        </ul>
    
        <button onClick={clearToCart}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  );
}