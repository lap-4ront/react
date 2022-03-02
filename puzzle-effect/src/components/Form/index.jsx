import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik, Form, useField } from 'formik';

const InputComponent = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <label>
      {label}: {meta.touched && meta.error && <div>{meta.error}</div>}
      <input {...field} {...props} />
    </label>
  );
};

const FormComponent = ({ handleSuccess }) => {
  const schema = Yup.object().shape({
    name: Yup.string().required('Required field'),
    email: Yup.string().email('Must be a valid email address').required('Required field')
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: ''
      }}
      onSubmit={handleSuccess}
      validationSchema={schema}
    >
      {() => {
        return (
          <Form>
            <InputComponent type="text" name="name" label="Name" autocomplete="off" />
            <InputComponent type="email" name="email" label="Email" autocomplete="off" />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

FormComponent.propTypes = {
  handleSuccess: PropTypes.func,
};

InputComponent.propTypes = {
  label: PropTypes.string
};

export { FormComponent as Form };
