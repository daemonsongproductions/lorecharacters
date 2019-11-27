import React, {useState, useEffect} from 'react'
import EditProfile from "./editProfile";
import ax from "../../../packs/axios";
import {Alert} from "reactstrap";

export default function Profile() {

  const [player, setPlayer] = useState({id: null, user_id: null, email: "", name: ""});
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
    const newPlayerState = { ...player };
    newPlayerState['name'] = name;
    setPlayer(newPlayerState);
  }

  function displayMode() {

    if (player.name) {
      return <div>Hi</div>
    } else if (player.id && !player.name) {
      return <EditProfile playerId={player.id}
                          playerName={player.name}
                          updateProfileData={updateProfileData}
                          setErrorMessage={setErrorMessage} />
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
      <div>
        {displayErrorMessage(errorMessage)}
        {displayMode()}
      </div>
  )

}