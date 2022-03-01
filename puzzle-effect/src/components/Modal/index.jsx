import React from 'react';
import PropTypes from 'prop-types';
import { Modal, BG, Close } from './styles';

const ModalComponent = ({ toggleModal, children }) => {
  return (
    <>
      <Modal>
        <Close onClick={toggleModal} />
        {children}
      </Modal>
      <BG onClick={toggleModal} />
    </>
  );
};

ModalComponent.propTypes = {
  toggleModal: PropTypes.func,
  children: PropTypes.element
};

export { ModalComponent as Modal };
