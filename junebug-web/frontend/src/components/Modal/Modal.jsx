import { useRef } from "react";
import "./modal.css";
import ReactDom from "react-dom";


// do some fetch of modal items from backend

function Modal({ setShowModal, body }) {
    const modalRef = useRef();
    const closeModal = (e) => {
        if (e.target === modalRef.current) {
            setShowModal(false);
        }
    };

    return ReactDom.createPortal(
        <>
        <div className="modal-overlay"/>
        <div className="modal-container" ref={modalRef} onClick={closeModal}>
            <div className="modal">
                <h1>Example Item</h1>
                <button 
                    className="modal-exit" 
                    onClick={() => setShowModal(false)}>X
                </button>
                <button className="modal-addCart">Add to Cart</button>
            </div>
        </div>
        </>,
        document.getElementById("modal-hook")
    );
}

export default Modal;