import React, {useState} from 'react'
import TextInput from '../../../shared/components/textInput'
import {Button, Form } from 'reactstrap';
import ax from '../../../packs/axios';


export default function RegistrationForm({setErrorMessage}) {

  const [formData, setFormData] = useState({email: "", password: "", password_confirmation: ""});

  function handleFormChange(fieldName, fieldValue) {
    const newFormState = { ...formData };

    newFormState[fieldName] = fieldValue;
    setFormData(newFormState);
  }

  function submitRegistration() {

    try{
      ax.post('/users.json', {
        user: {
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.confirmPassword
        }
      });

      window.location.href="/me";
    } catch(error) {
      setErrorMessage(error.response.data.message);
    }

  }

  return (
      <Form className={"m-3"}>
        <TextInput handleChange={(newValue) => handleFormChange('email', newValue)}
                   id={"registrationEmail"} name={"email"}
                   label={"Email"} type={'email'} value={formData.email} placeholder={'Email'} />
        <TextInput handleChange={(newValue) => handleFormChange('password', newValue)}
                   id={"registrationPassword"} name={"password"}
                   label={"Password"} type={'password'} value={formData.password} placeholder={'Choose a password'} />
        <TextInput handleChange={(newValue) => handleFormChange('confirmPassword', newValue)}
                   id={"confirmPassword"} name={"confirmPassword"}
                   label={"Password"} type={'password'} value={formData.confirmPassword} placeholder={'Retype password'} />
        <Button onClick={submitRegistration}>Submit</Button>
      </Form>
  )
}
