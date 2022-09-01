import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
        sincronizeItems: sincronizeTodos
      } = useLocalStorage('TODOS_V1', []);
      
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      let searchedTodos = [];
    
      if (!searchValue.length >= 1) {
        searchedTodos = todos;
      } else {
        
        searchedTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        })
      }
    
      const addTodo = (text) => {
        // creamos un array inyectado para posteriormente actyalizar los todos con setTodos
        const newTodos = [...todos];
        newTodos.push({text: text, completed: false})
        saveTodos(newTodos);
      }
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        // creamos un array inyectado para posteriormente actyalizar los todos con setTodos
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
        saveTodos(newTodos);
      }

      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        // creamos un array inyectado para posteriormente actyalizar los todos con setTodos
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }
    
      /*
      console.log('render antes use effect')
    
      React.useEffect(() => {
        console.log('use effect totalTodos')
      }, [totalTodos]);
      console.log('render luego use effect')
      */
    
    return {
            loading,
            error,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            sincronizeTodos
        };
}

export { useTodos };