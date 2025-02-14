import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './style.css';
import { FilterContextProvider } from './context/FilterContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <FilterContextProvider>
      <App />
    </FilterContextProvider>
  </StrictMode>
);