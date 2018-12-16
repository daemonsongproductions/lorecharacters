import React from 'react'
import {Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const RegistrationForm = props => (
    <Form>
      <FormGroup>
        <Label for="registrationEmail">Email</Label>
        <Input type="email" name="email" id="registrationEmail" placeholder="Email" />
      </FormGroup>
      <FormGroup>
        <Label for="registrationName">Player Name</Label>
        <Input type="text" name="name" id="registrationName" placeholder="Name" />
      </FormGroup>
      <FormGroup>
        <Label for="registrationPassword">Password</Label>
        <Input type="password" name="password" id="registrationPassword" placeholder="Choose a password" />
      </FormGroup>
      <FormGroup>
        <Label for="confirmPassword">Confirm Password</Label>
        <Input type="password" name="confirmPassword" id="confirmPassword" placeholder="Retype password" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
);

export default RegistrationForm;