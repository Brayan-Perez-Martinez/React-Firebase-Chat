import React from 'react';
import './style.css';
import { ChatContext } from './context/ChatProvider';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
export default function App() {
  const { usuario } = React.useContext(ChatContext);
  return usuario !== null ? (
    <div>
      <Navbar />
      {usuario.estado ? (
        <Chat />
      ) : (
        <div className="text-center mt-5 lead">
          click en acceder para iniciar chat
        </div>
      )}
    </div>
  ) : (
    <div>
      <h1>Cargando</h1>
    </div>
  );
}
