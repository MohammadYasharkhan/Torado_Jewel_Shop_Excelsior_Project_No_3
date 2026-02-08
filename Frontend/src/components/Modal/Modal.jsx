import { createPortal } from 'react-dom';
import { useBodyLock } from '../../hooks/useBodyLock';
import { useState, useEffect } from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, zIndex, children, modalId, size }) {

    useBodyLock(isOpen);
    const [visible, setVisible] = useState(false);
    const [render, setRender] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setRender(true);
            requestAnimationFrame(() => setVisible(true));
        } else {
            setVisible(false);
            const t = setTimeout(() => setRender(false), 300);
            return () => clearTimeout(t);
        }
    }, [isOpen]);

    if (!render) return null;

    return createPortal(
        // <div className='modal-backdrop fade show' >
        <>
            <div className={`modal-backdrop fade ${visible ? 'show' : ''}`} style={{ zIndex: zIndex - 1 }}></div>

            <div className={`modal fade d-block ${visible ? 'show' : ''}`} tabIndex={-1} aria-modal="true" style={{ zIndex }} id={`modal-${modalId}`} onClick={onClose}>
                <div className={`modal-dialog modal-dialog-centered modal-${size}`} onClick={e => e.stopPropagation()}>
                    <div className='modal-content rounded-0'>
                        <div className='modal-header border-0 p-0'>
                            <button type='button' className='bg-transparent border-0' onClick={onClose} aria-label='Close'>
                                <i className="bx bx-x"></i>
                            </button>
                        </div>
                        <div className='modal-body p-0'>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>
        ,
        document.body
    );
}

export default Modal;
