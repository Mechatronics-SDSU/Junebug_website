import { useRef } from "react";
import "./modal.css";
import ReactDom from "react-dom";


// do some fetch of modal items from backend

function Modal({ setShowModal }) {
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
                <h1>Item Options</h1>
                <button onClick={() => setShowModal(false)}>X</button>
            </div>
        </div>
        </>,
        document.getElementById("modal-hook")
    );
}

export default Modal;