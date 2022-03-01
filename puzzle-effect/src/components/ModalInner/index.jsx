import React, { useState } from 'react';
import { Container } from './styles';
import { Form } from '../Form';

const ModalInner = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    return setShowSuccess(true);
  };

  return (
    <Container>
      {
        showSuccess
          ? (
            <>
              <h4>Yep! Welcome!</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi mollitia dolorum, dolor sint cumque.</p>
            </>
          ) : (
            <>
              <h3>Sign up</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatem libero iusto officiis laboriosam autem.</p>
              <Form handleSuccess={handleSuccess} />
            </>
          )
      }
    </Container>
  );
};
export { ModalInner };
