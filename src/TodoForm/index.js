import React from "react";
import './TodoForm.css';

function TodoForm({ addTodo, setOpenModal }) {
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }
    
    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>...</label>
            <textarea 
                value={newTodoValue}
                onChange={onChange}
                placeholder="Ingrese su TODO"
            />
            <div>
                <button
                    type="button"
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                >   
                    Agregar
                </button>
            </div>
        </form>
    );
}

export { TodoForm };