/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { products as initialProducts } from '../mocks/products.json';

export function useUpdatePricesAndLocal({ pricesConverted }){
  // ESTADOS
  const [products] = useState(initialProducts);
  const [local, setLocal] = useState('es-US');
  const [currency, setCurrency] = useState('USD');
  const [pricesToDisplay, setPricesToDisplay] = useState([]);

  //FUNCION PARA ACTUALIZAR LA MONEDA Y PRECIO SEGUN CASOS DE CONVERSION
  const updatePricesAndLocal = ()=>{
    if (pricesConverted.length > 0) {
      const updatedPrices = products.map((product) => {
        const CONVERTED_PRICE= pricesConverted.find((p) => p.id === product.id)?.convertedPrice;
  
        if (isNaN(CONVERTED_PRICE) || !CONVERTED_PRICE) {
          setCurrency('USD');
          setLocal('es-US');
          return { id: product.id, price: product.price }; // Usar el precio original si no hay conversión
        } else {
          setCurrency('ARS');
          setLocal('es-AR');
          return { id: product.id, price: CONVERTED_PRICE }; // Usar el precio convertido
        }
      });
      setPricesToDisplay(updatedPrices);
    }
  };

  // Effect  PARA MANEJAR LOGICA DE ASIGNACION DE PRECIOS Y LOCALIZACIÓN
  useEffect(()=>{
    updatePricesAndLocal(); 
  }, [pricesConverted, products]);


  return { local, currency, pricesToDisplay };
}