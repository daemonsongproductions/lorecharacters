import React from 'react'
import {Button, Card, CardBody, CardText, CardTitle} from "reactstrap";


export default function ShowProfile({playerName, setEditable}) {

  function edit() {
    setEditable(true);
  }

  return(
      <Card>
        <CardBody>
          <CardTitle>
            <div class="row">
              <div className="col-sm-8">
                Profile
              </div>
              <div className="col-sm-4">
                <Button outline color="secondary" size="sm" onClick={edit}>Edit Profile</Button>
              </div>
            </div>
          </CardTitle>
          <CardText>
            <div class="row">
              <div className="col-sm-6">
                Name: {playerName}
              </div>
            </div>
          </CardText>
        </CardBody>
      </Card>
  )

}