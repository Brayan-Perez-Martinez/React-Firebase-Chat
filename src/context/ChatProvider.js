import React, { useState, useEffect } from 'react';
import { db, auth, provider } from '../firebase';
export const ChatContext = React.createContext();

export const ChatProvider = ({ children }) => {
  const dataUsuario = { uid: null, email: null, estado: null };
  const [usuario, setUsuario] = useState(dataUsuario);
  const [mensajes, setMensajes] = useState([]);

  useEffect(() => {
    detectarUsuario();
  }, []);

  const detectarUsuario = () => {
    auth.onAuthStateChanged(user => {
      if (user) {
        console.log(user);
        setUsuario({ uid: user.uid, email: user.email, estado: true });
        cargarMensajes();
      } else {
        console.log(user);

        setUsuario({ uid: null, email: null, estado: false });
      }
    });
  };

  const ingresoUsuario = async () => {
    try {
      await auth.signInWithPopup(provider);
    } catch (error) {
      console.log(error);
    }
  };
  const cerrarSesion = () => {
    auth.signOut();
  };
  const cargarMensajes = () => {
    db.collection('messages')
      .orderBy('fecha')
      .onSnapshot(query => {
        const arrayMensajes = query.docs.map(item => item.data());
        setMensajes(arrayMensajes);
      });
  };
  const agregarMensajes = async (uid, texto) => {
    try {
      await db.collection('messages').add({
        uid: uid,
        texto: texto,
        fecha: Date.now()
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ChatContext.Provider
      value={{
        usuario,
        ingresoUsuario,
        cerrarSesion,
        mensajes,
        agregarMensajes
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
