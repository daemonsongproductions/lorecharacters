import React, {useEffect, useState} from 'react'
import moment from 'moment'
import ax from '../../../packs/axios';


export default function ApplicationStatus() {

  const [time, setTime] = useState(null);
  const [status, setStatus] = useState(null);


  async function fetchDate() {
    const response = await ax.get(`/status.json`);
    setTime(response.data.time);
    setStatus(response.data.status);
  }


  useEffect(() => {
    fetchDate();
  }, []);

  return(
    <div>
      <p>The time is {moment(time).format('MMMM Do YYYY, h:mm:ss a')}.</p>
      <p>System status is {status}.</p>
    </div>
  );
}