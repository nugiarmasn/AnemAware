import React from 'react';
import Input from '../atoms/Input';
import Select from '../atoms/Select';

const FormGroup = ({ type = 'input', ...props }) => {
  if (type === 'select') {
    return <Select {...props} />;
  }
  return <Input {...props} />;
};

export default FormGroup;