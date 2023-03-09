const Modal = ({ location, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{location.name}</h2>
        <p>{location.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
