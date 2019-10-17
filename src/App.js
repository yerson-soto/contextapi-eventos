import React from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListasEventos from './components/ListaEventos';

import CategoriasProvider from './context/CategoriasContext';
import EventosProvider from './context/EventosContext';


function App() {
   return (
      <EventosProvider>
         <CategoriasProvider>
         
            <Header />

            <div className="uk-container">
               <Formulario />

               <ListasEventos />
            </div>

         </CategoriasProvider>
      </EventosProvider>
   )
}

export default App;
