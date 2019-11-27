import React, {useState, useEffect} from 'react'
import EditProfile from "./editProfile";
import ShowProfile from './showProfile';
import ax from "../../../packs/axios";
import {Alert} from "reactstrap";

export default function Profile() {

  const [player, setPlayer] = useState({id: null, user_id: null, email: "", name: ""});
  const [editable, setEditable] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  async function fetchProfileInfo() {
    try {
      const response = await ax.get(`/me.json`);
      setPlayer({id: response.data.id,
        user_id: response.data.user_id,
        name: response.data.name,
        email: response.data.email});
    } catch (error) {
      console.log(error);
    }
  }

  function updateProfileData(name) {
    setPlayer({
      ...player,
      ['name']: name
    });
  }

  function displayMode() {

    if (player.name && !editable) {
      return <ShowProfile playerName={player.name} setEditable={setEditable} />
    } else if (player.id && (!player.name || editable)) {
      return <EditProfile playerId={player.id}
                          playerName={player.name}
                          updateProfileData={updateProfileData}
                          setErrorMessage={setErrorMessage}
                          setEditable={setEditable} />
    }

  }
  function displayErrorMessage(message) {
    if(message) {
      return(
          <Alert color="danger">
            {message}
          </Alert>
      )
    }
  }

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  return (
      <div className="row">
        <div className="col-sm-6">
          {displayErrorMessage(errorMessage)}
          {displayMode()}
        </div>
      </div>
  )

}