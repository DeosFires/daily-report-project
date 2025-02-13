import React, { useState } from 'react';
import './ModalAgregarCelda.css'; // Estilos del modal

const ModalAgregarCelda = ({ isOpen, onClose, onAgregarCelda }) => {
    const [titulo, setTitulo] = useState('');
    const [imagen, setImagen] = useState(null);
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Crear un objeto con los datos de la nueva celda
        const nuevaCelda = {
            titulo,
            imagen: imagen ? `/img/${imagen.name}` : '', // Guardar la ruta de la imagen
            descripcion,
        };

        // Llamar a la función onAgregarCelda para agregar la nueva celda
        onAgregarCelda(nuevaCelda);

        // Limpiar el formulario y cerrar el modal
        setTitulo('');
        setImagen(null);
        setDescripcion('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Agregar Nueva Celda</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Título:</label>
                        <input
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Imagen:</label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => setImagen(e.target.files[0])}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripción:</label>
                        <textarea
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                            required
                        />
                    </div>
                    <div className="modal-buttons">
                        <button type="button" onClick={onClose}>
                            Cancelar
                        </button>
                        <button type="submit">Agregar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export { ModalAgregarCelda };