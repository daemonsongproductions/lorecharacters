import React, {useState} from 'react'
import TextInput from '../../../shared/components/textInput'
import {Button, Form } from 'reactstrap';
import ax from '../../../packs/axios';


export default function SignInForm({setErrorMessage}) {

  const [formData, setFormData] = useState({});

  function handleFormChange(fieldName, fieldValue) {
    const newFormState = { ...formData };

    newFormState[fieldName] = fieldValue;
    setFormData(newFormState);
  }

  async function signIn(){
    try {
      await ax.post(`/users/sign_in.json`, {
        user: {
          email: formData.email,
          password: formData.password,
        }
      });
      window.location.href="/";

    } catch(error) {
      setErrorMessage(error.response.data.error);
    }
  }

  return(
      <Form className={"m-3"}>
        <TextInput handleChange={(newValue) => handleFormChange('email', newValue)}
                   id={"registrationEmail"} name={"email"}
                   label={"Email"} type={'email'} value={formData.email} placeholder={'Email'} />
        <TextInput handleChange={(newValue) => handleFormChange('password', newValue)}
                   id={"registrationPassword"} name={"password"}
                   label={"Password"} type={'password'} value={formData.password} placeholder={'Choose a password'} />
        <Button onClick={signIn}>Submit</Button>
      </Form>
  );
}