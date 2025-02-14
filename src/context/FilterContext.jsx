import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FilterContext = createContext();

export function FilterContextProvider({ children }) {
  // ESTADO DE CONTEXTO
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 250,
  });

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}

FilterContextProvider.propTypes = {
  children: PropTypes.element,
};
