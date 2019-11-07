import React from 'react'
import TextInput from '../../../shared/components/textInput'
import {Button, Form } from 'reactstrap';

const EditProfileForm = ({playerState, hide, submit, handleFormChange}) => (
    <Form className={"m-3"} hidden={hide} >
      <TextInput handleChange={(newValue) => handleFormChange('playerName', newValue)}
                 id={"playerName"} name={"playerName"}
                 label={"Your name (or whatever we know you by)"} type={'text'} value={playerState.formData.playerName} placeholder={'Name'} />
      <Button onClick={submit}>Submit</Button>
    </Form>
);

export default EditProfileForm;