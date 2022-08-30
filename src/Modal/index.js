import React from "react";
import PortalReactDOM from 'react-dom'
import './modal.css'

function Modal({ children }) {
    return PortalReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal') // indicamos el nodo hijo donde se mostrara el portal
    );
}

export { Modal }