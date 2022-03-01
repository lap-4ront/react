import React from 'react';
import PropTypes from 'prop-types';

const FormComponent = ({ handleSuccess }) => {
  return (
    <form onSubmit={handleSuccess}>
      <label htmlFor="name">Name: </label>
      <input type="text" id="name" required autoComplete='off' />

      <label htmlFor="email">Email address:: </label>
      <input type="email" id="email" required autoComplete='off' />

      <button type="submit">Submit</button>
    </form>
  );
};

FormComponent.propTypes = {
  handleSuccess: PropTypes.func
};

export { FormComponent as Form };
