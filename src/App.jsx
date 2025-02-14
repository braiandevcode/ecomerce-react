// import { useState } from 'react';
import { useState } from 'react';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { IS_DEVELOPMENT } from './config/config';
import { useFilter } from './hooks/useFilter';
import { products as initialProducts} from './mocks/products.json';
import { Cart } from './components/Cart';
import { CartContextProvider } from './context/CartContext';

// APP
export function App(){
  const [products] = useState(initialProducts);
  const { filtersProducts } = useFilter();
  const filteredProducts = filtersProducts(products);  
  return(
    <>
      <CartContextProvider>
        <Header />
        <Cart />
        <Products products={filteredProducts}/>
        {IS_DEVELOPMENT && <Footer/>}
      </CartContextProvider>
    </>  
  );
}