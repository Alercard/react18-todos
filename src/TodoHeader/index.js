import React from "react";

function TodoHeader({children, loading}) {
    // clonamos children para agregarle la propiedad loading, 
    // pero si children es mas de 1 o 0, dara un error porque esta 
    // instruccion asume que solo trabajara con 1 elemento
    // React.cloneElement(children, { loading })

    // React.Children permite barrer todos los child y agregar las propiedades que se deseen
    // React.Children.toArray(children).map(child => React.cloneElement(child, {loading}));
    
    return (
        <header>
            {
                React.Children
                    .toArray(children)
                    .map(
                        child => React.cloneElement(child, {loading})
                    )
            }
        </header>
    );
}

export { TodoHeader };