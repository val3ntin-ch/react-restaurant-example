import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, onClose }) => {
  const elRef = useRef(null);

  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => {
      if (elRef.current) {
        modalRoot.removeChild(elRef.current);
      }
    };
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
  //   const modalRef = useRef(null);

  //   useEffect(() => {
  //     modalRef.current = document.createElement("div");
  //     document.body.appendChild(modalRef.current);

  //     return () => {
  //       document.body.removeChild(modalRef.current);
  //     };
  //   }, []);

  //   const handleClose = (e) => {
  //     if (e.target === e.currentTarget) {
  //       onClose();
  //     }
  //   };

  //   return createPortal(
  //     <div
  //       className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
  //       onClick={handleClose}
  //     >
  //       <div className="bg-white p-4 rounded shadow-lg">{children}</div>
  //     </div>,
  //     modalRef.current,
  //   );
};
export default Modal;
