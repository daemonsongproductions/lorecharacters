import React, {useState, useEffect} from 'react'
import {Button, Form, Card, CardBody, CardTitle, CardText} from "reactstrap";
import TextInput from "../../../shared/components/textInput";
import ax from "../../../packs/axios";


export default function EditProfile({playerName, playerId, updateProfileData, setErrorMessage, setEditable}) {

  const [formData, setFormData] = useState({name: playerName, id: playerId});


  function handleFormChange(fieldName, fieldValue) {
    const newFormState = { ...formData };

    newFormState[fieldName] = fieldValue;
    setFormData(newFormState);
  }

  function cancelEdit() {
    setEditable(false);
  }

  async function updatePlayer() {

    try{
      await ax.put(`/players/${formData.id}.json`, {
        player: {
          id: formData.id,
          name: formData.name
        }
      });

      updateProfileData(formData.name);
      setEditable(false);

    } catch(error) {
      setErrorMessage(error.response.data.message);
    }

  }

  return(
      <Card>
        <CardBody>
          <CardTitle>Profile</CardTitle>
          <CardText>
            <Form className={"m-3"}>
              <TextInput handleChange={(newValue) => handleFormChange('name', newValue)}
                         id={"playerName"} name={"name"}
                         label={"Your name (or whatever we know you by)"} type={'text'} value={formData.name}
                         placeholder={'Name'}/>
              <Button onClick={cancelEdit} color="secondary">Cancel</Button>
              <Button onClick={updatePlayer} color="primary">Submit</Button>
            </Form>
          </CardText>
        </CardBody>
      </Card>

  )

}