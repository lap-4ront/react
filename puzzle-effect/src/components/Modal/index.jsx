import React from 'react';
import PropTypes from 'prop-types';
import { Modal, BG, Close } from './styles';

const ModalComponent = ({ toggleModal }) => {
  return (
    <>
      <Modal>
        <Close onClick={toggleModal} />
      </Modal>
      <BG onClick={toggleModal} />
    </>
  );
};

ModalComponent.propTypes = {
  toggleModal: PropTypes.func
};

export { ModalComponent as Modal };
