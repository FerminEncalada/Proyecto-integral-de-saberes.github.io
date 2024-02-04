import React, { useState } from 'react';
import FlujoTrabajo from './imagenes/FlujoDeTrabajoPis.png'; // Imagen original
import DiagramaClases from './imagenes/Diagrama.jpg'; 

export const Informacion = () => {
  const [flujoAmpliada, setFlujoAmpliada] = useState(false);
  const [DiagramaAmpliada, setDiagramaAmpliada] = useState(false);

  const toggleFlujoAmpliada = () => {
    setFlujoAmpliada(!flujoAmpliada);
  };

  const toggleDiagramaAmpliada = () => {
    setDiagramaAmpliada(!DiagramaAmpliada);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-200">
      <div className="w-full max-w-screen-xl p-6 text-center bg-white rounded-md shadow-md relative">
        <div className="mt-4">
          <div className="mb-4">
            <h1 className="text-3xl font-bold">Información Del Proyecto</h1>
          </div>
          <h2 className="text-xl font-bold mb-2 underline">Flujo de Trabajo</h2>
          <p className="mb-4"></p>
          {flujoAmpliada && (
            <div
              className="fixed top-0 left-0 right-0 bottom-0 z-50 overflow-hidden flex items-center justify-center"
              style={{ background: 'rgba(255, 255, 255, 0.9)' }}
              onClick={toggleFlujoAmpliada}
            >
              <img
                src={FlujoTrabajo}
                alt="Descripción de la imagen"
                className="max-h-full max-w-full cursor-pointer"
              />
            </div>
          )}
          <img
            src={FlujoTrabajo}
            alt="Descripción de la imagen"
            className={`w-full h-auto rounded-md cursor-pointer ${flujoAmpliada ? 'filter brightness-50' : ''} mb-4 mx-auto`}
            style={{ maxWidth: 'calc(100% + 20px)' }}
            onClick={toggleFlujoAmpliada}
          />

          {DiagramaAmpliada && (
            <div
              className="fixed top-0 left-0 right-0 bottom-0 z-50 overflow-hidden flex items-center justify-center"
              style={{ background: 'rgba(255, 255, 255, 0.9)' }}
              onClick={toggleNuevaImagenAmpliada}
            >
              <img
                src={DiagramaClases}
                alt="Descripción de la nueva imagen"
                className="max-h-full max-w-full cursor-pointer" 
              />
            </div>
          )}
            <h2 className="text-xl font-bold mb-2 underline">Diagrama de clases</h2>
          <img
            src={DiagramaClases}
            alt="Descripción de la nueva imagen"
            className={`w-full h-auto rounded-md cursor-pointer ${DiagramaAmpliada ? 'filter brightness-50' : ''} mb-4 mx-auto`}
            style={{ maxWidth: 'calc(100% + 20px)' }}
            onClick={toggleDiagramaAmpliada}
          />

        </div>
      </div>
    </div>
  );
};

