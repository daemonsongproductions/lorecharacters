import React  from 'react';
import {FormGroup, Label, Input } from 'reactstrap';

const TextInput = ({handleChange, id, name, label, type, value, placeholder}) => (
    <FormGroup>
      <Label for={id}>{label}</Label>
      <Input type={type}
             name={name}
             id={id}
             placeholder={placeholder}
             value={value}
             onChange={(event) => handleChange(event.target.value)}
      />
    </FormGroup>
);

export default TextInput;