import React from 'react';
import './Modal.css';  // css 파일 가져오기

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onClose}>닫기</button>
      </div>
    </div>
  );
};

export default Modal;
