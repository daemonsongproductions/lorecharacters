import React from 'react'
import TextInput from '../../../shared/components/textInput'
import {Button, Form } from 'reactstrap';

const SignInForm = ({signInState, submit, handleFormChange}) => (
    <Form className={"m-3"}>
      <TextInput handleChange={(newValue) => handleFormChange('email', newValue)}
                 id={"registrationEmail"} name={"email"}
                 label={"Email"} type={'email'} value={signInState.formData.email} placeholder={'Email'} />
      <TextInput handleChange={(newValue) => handleFormChange('password', newValue)}
                 id={"registrationPassword"} name={"password"}
                 label={"Password"} type={'password'} value={signInState.formData.password} placeholder={'Choose a password'} />
      <Button onClick={submit}>Submit</Button>
    </Form>
);

export default SignInForm;