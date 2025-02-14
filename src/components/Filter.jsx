import { useId } from 'react';
import { useFilter } from '../hooks/useFilter';
export function Filter (){
  const { filters, setFilters } = useFilter(); 

  console.log(filters);
  

  const filterPriceId = useId();
  const filterCategoryId = useId();
  
  const handleChangePrice = (event)=>{
    setFilters((preState)=>({
      ...preState,
      minPrice: event.target.value
    }));
  };
  
  const handleChangeCategory = (event)=>{
    setFilters((preState)=>({
      ...preState,
      category: event.target.value
    }));
  };

  return (
    <>
      <section className="filters">
        <div>
          <label htmlFor={filterPriceId}>Precios desde:</label>
          <input type="range" min={0} max={1000} id={filterPriceId} onChange={handleChangePrice} value={filters.minPrice}/>
          <output>${filters.minPrice}</output>
        </div>
        <div>
          <label htmlFor={filterCategoryId}>Categoria</label>
          <select id={filterCategoryId} onChange={handleChangeCategory}>
            <option value="all">Todos</option>
            <option value="men's clothing">Ropa de Hombres</option>
            <option value="women's clothing">Ropa de mujeres</option>
            <option value="jewelery">Joyería</option>
            <option value="electronics">Electrónicos</option>
          </select>
        </div>
      </section>
    </>
  );
}
