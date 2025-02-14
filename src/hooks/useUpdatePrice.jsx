/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

export function useUpdatePrices({ products }){
  /***********************ESTADOS*******************/
  const [pricesToConvert, setPricesToConvert] = useState([]);

  /*******************EFECTOS***********************************/
  //ESTE EFFECT ACTUALIZA LOS PRECIOS A MEDIDA QUE CAMBIAN LOS ESTADOS
  useEffect(() => {
    const addPrice = () => {
      const updatedPrices = products.map(({ id, price }) => ({ id, price }));
      if (pricesToConvert.length > 0) {
        setPricesToConvert((prevPrices) => {
          return [...prevPrices, ...updatedPrices]; // Agregar a la lista existente
        });
      } else {
        setPricesToConvert(updatedPrices); // Si está vacío, simplemente asignar los nuevos precios
      }
    };
    addPrice();
  }, [products]); 

  return { pricesToConvert };
}