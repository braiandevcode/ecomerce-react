import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export function useCart(){
  const context = useContext(CartContext);
  
  if(context === undefined){
    throw new Error('No puedes acceder a los datos del useContext');
  }

  return context;
}