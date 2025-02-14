/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { queryConvert } from '../services/queryConvert';

export function useChangePriceConvert({ pricesToConvert, products }){
  const [pricesConverted, setPricesConverted] = useState([]);
        
  //ESTE EFFECT CONVIERTE LOS PRECIOS CUANDO `pricesToConvert` CAMBIA.
  useEffect(() => {
    if (pricesToConvert.length > 0) { 
      const fetching = async () => {
        const convertedPrice = await Promise.all(
          pricesToConvert.map(async (priceToConvert) => {
            const product = products.find((product) => product.id === priceToConvert.id);
            if (product) {
              try {
                const result = await queryConvert({
                  toMoney: 'ARS',
                  fromMoney: 'USD',
                  amount: product.price,
                });
                // Si la conversión es exitosa, se asigna el precio convertido
                return { id: priceToConvert.id, convertedPrice: result };
              } catch{
                // Si hay un error en la conversión, usamos el precio original en dólares
                return { id: priceToConvert.id, convertedPrice: product.price };
              }
            }
            return priceToConvert; // Devuelve el precio original si no se encuentra el producto
          })
        );
        setPricesConverted(convertedPrice);
      };
      fetching();
    }
  }, [pricesToConvert]); 

  return { pricesConverted };
} 