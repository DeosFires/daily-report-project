import React from "react";
import './Celda.css';

function Celda({ nombreEstructura, descripcion, imgUrl }) {
    return (
        <>
            <div className="celda-container">
                <h3 className="titulo">{nombreEstructura}</h3>
                <div className="imagen-container">
                    <img src={imgUrl} alt="Foto de estructura" className="imagen" />
                </div>
                <p className="descripcion">{descripcion}</p>
            </div>
        </>
    )
}

export { Celda };