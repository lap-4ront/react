import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Container, H3, H4, P, Socials, SuccessContainer } from './styles';
import { Form } from '../Form';
import { ReactComponent as Smile } from './smile.svg';
import { ReactComponent as Instagram } from './instagram.svg';
import { ReactComponent as Twitter } from './twitter.svg';
import { ReactComponent as Facebook } from './facebook.svg';

const Input = ({ handleSuccess }) => {
  return (
    <Container>
      <H3>Sign up</H3>
      <P>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatem libero iusto officiis laboriosam autem.</P>
      <Form handleSuccess={handleSuccess} />
    </Container>
  );
};

const Success = () => {
  return (
    <SuccessContainer>
      <Smile className="smile" />
      <H4>Yep! Welcome!</H4>
      <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat commodi mollitia dolorum, dolor sint cumque.</P>
      <Socials>
        <Instagram className="social" />
        <Twitter className="social" />
        <Facebook className="social" />
      </Socials>
    </SuccessContainer>
  );
};

const ModalInner = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    return setShowSuccess(true);
  };

  return showSuccess ? <Success /> : <Input handleSuccess={handleSuccess} />;
};

Input.propTypes = {
  handleSuccess: PropTypes.func
};

export { ModalInner };
