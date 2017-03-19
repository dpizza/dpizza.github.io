import React from 'react';

import Modal from 'react-bootstrap/lib/Modal';

const Schedule = ({showModal, closeModal}) => {
  return (
    <div>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title><strong>Horarios</strong></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <p>
              <strong>Lunes a Domingo</strong>
              <br />Pizzas (5pm - 10pm)
            </p>
            <p>
              <strong>Lunes a Viernes</strong>
              <br />
              Desayunos (7:30am - 10am){' '}
              <br />
              Almuerzos (12am - 2:30pm)
              <br />
              Panadería (3pm - 6pm)
            </p>
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
};

Schedule.propTypes = {
  showModal: React.PropTypes.bool.isRequired,
  closeModal: React.PropTypes.func.isRequired,
};

export default Schedule;
