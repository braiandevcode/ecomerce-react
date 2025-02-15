import { useContext } from 'react';
import { FilterContext } from '../context/FilterContext';

export function useFilter() {
  const { filters, setFilters } = useContext(FilterContext);

  const filtersProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === 'all' || product.category === filters.category)
      );
    });
  };

  return { filters, setFilters, filtersProducts };
}
