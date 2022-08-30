import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect( () => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
        
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            parsedItem = JSON.parse(localStorageItem);
          }
          
          setItem(parsedItem);
          setLoading(false)
            
        } catch (error) {
          setError(error)
        }
      }, 3000);
    })
  
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        // setItem causara un re render por la actualizacion de estados
        setItem(newItem);
          
      } catch (error) {
        setError(error);      
      }
    }
  
    // cuando un state tiene mas de 2 argumentos, la convencion
    // indica que mejor se devuelva un objeto
    return {
      item,
      saveItem,
      loading,
      error
    };
  
  
  }
  
  export { useLocalStorage };