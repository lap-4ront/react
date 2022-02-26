import React from 'react';
import PropTypes from 'prop-types';
import { Image } from './styles';

const ImageBox = ({ x, y }) => {
  return (
    <Image $initialX={x} $initialY={y} />
  );
};

ImageBox.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
};

export { ImageBox };
