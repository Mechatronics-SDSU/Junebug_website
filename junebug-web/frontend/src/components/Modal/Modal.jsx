import "./modal.css";
import ReactDom from "react-dom";


function Modal({handleClose, menuItem}) {

    return ReactDom.createPortal(
        <>
        <div className="modal-overlay"/>
        <div className="modal-container">
            <div className="modal">
                <h1>{menuItem.name}</h1>
                <button 
                    className="modal-exit" 
                    onClick={handleClose}>X
                </button>
                <button className="modal-addCart">Add to Cart</button>
            </div>
        </div>
        </>,
        document.getElementById("modal-hook")
    );
}

export default Modal;