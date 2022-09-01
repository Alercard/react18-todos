import React from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
//import './index.css';

function App(props) {
    return (
        <h1>{props.saludo}, {props.name}</h1>
    );
}

// HOC: High Order Component
function withSaludo(saludo) {

    return function WrappedComponentWithSaludo (WrappedComponent) {

        // la ultima funcion de retorno siempre tiene que retornar un componente de React
        return function ComponenteDeVerdad(props) {
            // heredamos las propiedads originales con: {...props}
            return (
                <React.Fragment>
                    <WrappedComponent {...props} saludo={saludo} />
                    <p>Estamos acompanando al WrappedComponent</p>
                </React.Fragment>
            )
        };
    };
}

const AppWithSaludo = withSaludo('Que fue')(App);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppWithSaludo name="Linda" />
    //<App saludo="Buenas" name="JK" />
);

