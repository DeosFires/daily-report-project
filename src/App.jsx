import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Celda } from '../components/Celda'
import { CeldaList } from '../components/CeldaList'
import { CreateCeldaButton } from '../components/CreateCeldaButton'
import './App.css'
import { ModalAgregarCelda } from '../components/ModalAgregarCelda'

function App() {

  const [celdas, setCeldas] = useState([]);
  const [modalAbierto, setModalAbierto] = useState(false);

  const agregarCelda = (nuevaCelda) => {
    // Guardar la imagen en la carpeta public/img (simulado)
    if (nuevaCelda.imagen) {
      const formData = new FormData();
      formData.append('file', nuevaCelda.imagen);
      // Aquí podrías hacer una petición a un servidor para guardar la imagen
      // Por ahora, simulamos que la imagen se guarda en public/img
    }

    // Agregar la nueva celda al estado
    setCeldas([...celdas, nuevaCelda]);
  };


  const items = [
    { nombreEstructura: 'Poza Ornamo', imgUrl: "img/Ornamo.jpg", descripcion: 'Nivel  90% se requiere una motobomba para bombear el agua' },
    { nombreEstructura: 'Sump Chaquicocha', imgUrl: "img/Sump_Gravas.jpg", descripcion: '4 bombas operativas. En mantenimiento' },
    { nombreEstructura: 'Sump Chaquicocha', imgUrl: '', descripcion: '4 bombas operativas. En mantenimiento' },
    { nombreEstructura: 'Sump Chaquicocha', imgUrl: '', descripcion: '4 bombas operativas. En mantenimiento' },
    { nombreEstructura: 'Sump Chaquicocha', imgUrl: '', descripcion: '4 bombas operativas. En mantenimiento' },
    { nombreEstructura: 'Sump Chaquicocha', imgUrl: '', descripcion: '4 bombas operativas. En mantenimiento' },

  ];

  return (
    <>
      <h1>Daily Report</h1>
      <CreateCeldaButton onClick={() => setModalAbierto(true)} ></CreateCeldaButton>
      <ModalAgregarCelda
        isOpen={modalAbierto}
        onClose={() => { setModalAbierto(false) }}
        onAgregarCelda={agregarCelda}
      />
      <CeldaList>
        {items.map((item, index) => (
          <Celda
            key={index}
            nombreEstructura={item.nombreEstructura}
            imgUrl={item.imgUrl}
            descripcion={item.descripcion}
          />
        ))
        }
      </CeldaList>
    </>
  )
}

export default App
