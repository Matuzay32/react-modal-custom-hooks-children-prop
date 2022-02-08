import React from 'react';
import './modal.css'

const Modal = ({isOpen , closeModal , children  , title}) => {

const evitarCierreModal  = (e)=>{
    e.stopPropagation();
}










    return (

      <div className={`modal ${isOpen && 'modal-open' }` } onClick={closeModal}  >

      <div className='modalDialog' onClick={evitarCierreModal}>
        <h1>{title}</h1>
    
        <br></br>
        <button onClick={closeModal}> Cerrar Modal</button>
        {children}
    
    
      </div>
    
    </div>
    );
};


export default Modal;