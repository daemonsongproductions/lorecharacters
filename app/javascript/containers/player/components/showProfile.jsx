import React from 'react'
import {Button} from "reactstrap";


export default function ShowProfile({playerName, setEditable}) {

  function edit() {
    setEditable(true);
  }

  return(
      <div>
        Name: {playerName}
        <Button onClick={edit}>Edit Profile</Button>
      </div>
  )

}