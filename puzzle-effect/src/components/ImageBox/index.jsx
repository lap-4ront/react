import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './styles';

const ImageBox = ({ x }) => {
  console.log(x);
  return (
    <Image />
  );
};

ImageBox.propTypes = {
  x: PropTypes.number
};

export { ImageBox };
