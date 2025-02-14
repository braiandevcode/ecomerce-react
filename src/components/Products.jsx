import PropTypes from 'prop-types';
import '../styleComponents/Products.css';
import { AddToCartIcon, RemoveFromCartIcon } from './Icons';   
import { useUpdatePrices } from '../hooks/useUpdatePrice.jsx';
import { useChangePriceConvert } from '../hooks/useChangePriceConver.jsx';
import formatIntl from '../helpers/formatIntl.js';
import { useUpdatePricesAndLocal } from '../hooks/useUpdatePricesAndLocal.jsx';
import { useCart } from '../hooks/useCart.jsx';

export function Products({ products }) {
  // Custom hooks
  const { cart, addToCart,  removeProductInCart} = useCart();
  const { pricesToConvert } = useUpdatePrices({ products });
  const { pricesConverted } = useChangePriceConvert({ pricesToConvert, products });
  const { local, currency, pricesToDisplay} = useUpdatePricesAndLocal({pricesConverted, products });

  const checkProductInCart = product =>{
    return cart.some(item => item.id === product.id);
  };
  return (
    <main>
      {products?.length > 0 ? (
        <ul className="products">
          {products.map((product) => {
            const priceData = pricesToDisplay.find((price) => price.id === product.id);
            const priceToDisplay = priceData ? priceData.price : product.price; // Usar el precio calculado
            const isProductInCart = checkProductInCart(product);
            return (
              <li key={product.id} className="products__p">
                <img src={product.image} alt={product.title} />
                <div>
                  <strong title={product.title}>{product.title}</strong>
                  {formatIntl({
                    locale: local,
                    currency: currency,
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    convertedPrice: priceToDisplay,
                  })} {currency === 'USD' ? 'USD' : 'ARS'}
                </div>
                <div>
                  <button type="button" style={ isProductInCart ? {backgroundColor:'red'} : {backgroundColor:'green'}} onClick={()=> isProductInCart ? removeProductInCart(product): addToCart(product)}>
                    {
                      isProductInCart 
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>No se encontraron productos</p>
      )}
    </main>
  );
}

Products.propTypes = {
  products: PropTypes.array.isRequired,
};
