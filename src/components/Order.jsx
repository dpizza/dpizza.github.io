import React from 'react';

import Modal from 'react-bootstrap/lib/Modal';

const Order = ({showModal, closeModal}) => {
  return (
    <div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ordena</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ordena llamando al<br />☎ +58 (274) 2458471
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

Order.propTypes = {
  showModal: React.PropTypes.bool.isRequired,
  closeModal: React.PropTypes.func.isRequired,
};

export default Order;
