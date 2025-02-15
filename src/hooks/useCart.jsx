import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export function useCart(){
  const context = useContext(CartContext);
  
  if(context === undefined){
    throw new Error('No se puede usar useCart fuera del proveedor CartProvider');
  }

  return context;
}