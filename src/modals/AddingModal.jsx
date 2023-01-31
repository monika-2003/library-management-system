import React from 'react';
import ReactDom from 'react-dom';

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    backgroundColor: 'white',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    height: '90%',
    width: '50%'
  }

  const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, .5)',
    zIndex: 1000
  }

  const CLOSE_BTN = {
    position: 'absolute',
    right: '5px',
    top: '5px',
    backgroundColor: 'red',
    fontWeight: '700',
    color: 'white',
    border: 'none',
    padding: '8px 13px',
    cursor: 'pointer'
  }


function Modal({children, onClose}) {
  console.log("MODAL",onClose)
  return ReactDom.createPortal(
    <>
        <div style={OVERLAY_STYLES} />
        <div style={MODAL_STYLES}>
            <button style={CLOSE_BTN} onClick={onClose}> X </button>
            {children}
        </div>
    </>,
    document.getElementById("adding-books")
  )
}

export default Modal