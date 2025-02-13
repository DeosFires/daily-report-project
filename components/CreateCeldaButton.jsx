import React from "react";
import './CreateCeldaButton.css';

function CreateCeldaButton({ onClick }) {
    return (
        <button className="boton-flotante" onClick={
            onClick
        }>+</button>
    )
}

export { CreateCeldaButton };