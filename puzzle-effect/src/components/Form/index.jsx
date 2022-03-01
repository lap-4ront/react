import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

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
      {({ touched, errors }) => {
        return <Form>
          <label>Name: </label>
          <Field type="text" name="name" id="name" autoComplete='off' />
          {touched.name && errors && <div>{errors.name}</div>}

          <label>Email address: </label>
          <Field type="email" name="email" id="email" autoComplete='off' />
          {touched.email && errors && <div>{errors.email}</div>}

          <button type="submit">Submit</button>
        </Form>;
      }}
    </Formik>
  );
};

FormComponent.propTypes = {
  handleSuccess: PropTypes.func,
};

export { FormComponent as Form };
