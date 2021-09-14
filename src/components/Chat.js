import React, { useContext, useRef, useEffect } from 'react';
import { ChatContext } from '../context/ChatProvider';
import Agregar from './Agregar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Badge } from 'antd';
import styled from 'styled-components';
const Chat = () => {
  const { usuario, mensajes } = useContext(ChatContext);
  const refZonaChat = useRef(null);

  useEffect(() => {
    if (refZonaChat.current !== null) {
      refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight;
    }
  }, [mensajes]);
  return (
    <Wrapper>
      <div
        className="mt-3 px-2"
        ref={refZonaChat}
        style={{ height: '75vh', overFlowY: 'scroll' }}
      >
        {mensajes.map((item, index) =>
          item.uid === usuario.uid ? (
            <div className="d-flex justify-content-end mb-2 " key={index}>
              <Badge className="badge-1">{item.texto}</Badge>
            </div>
          ) : (
            <div className="d-flex justify-content-start mb-2" key={index}>
              <Badge className="badge-1 badge-2">{item.texto}</Badge>
            </div>
          )
        )}
        <br/>
        <br/>
        <br/>
        <Agregar />
      </div>
    </Wrapper>
  );
};

export default Chat;

const Wrapper = styled.div`
  .badge-1 {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 12px 8px;
    color: #fff;
    background-color: #2048fd;
    border-radius: 20px;
  }
  .badge-2 {
    background-color: #6d7b6a;
  }
`;
