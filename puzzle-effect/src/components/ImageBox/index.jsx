import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Image } from './styles';

const ImageBox = ({ x, y, percent }) => {
  const [position, setPosition] = useState([0, 0]);

  useEffect(() => {
    setPosition(
      [
        Math.random() * 400 - x * 100 - 50,
        Math.random() * 600 - y * 100 - 50,
      ]
    );
  }, [x, y]);

  return (
    <Image
      $initialX={x}
      $initialY={y}
      $movedX={position[0] * percent}
      $movedY={position[1] * percent}
    />
  );
};

ImageBox.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  percent: PropTypes.number
};

export { ImageBox };
