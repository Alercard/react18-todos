import React from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue, loading }) {

  // React.useState son React hooks
  // [nombreVariable, fxParaSetear]
  // Cada cambio es una actualizacion en el render por lo que hay que tener cuidado
  // porque se puede crashear la web, para evitarlo se pasan los estado a App.js
  //const [searchValue, setSearchValue] = React.useState('');

  const onSearchValueChange = (event) => {
    console.log(searchValue);
    setSearchValue(event.target.value);
  }

  return (
    <input 
      className="TodoSearch" 
      placeholder="Buscar" 
      value={searchValue}
      onChange={onSearchValueChange}
      disabled={loading}
    />
  );
}

export { TodoSearch };