import axios from 'axios'

export const fetchDate = () => (dispatch, getState) => {

  dispatch(fetchingDate(true));

  return axios.get(`/status.json`)
      .then(response => {
        dispatch({
          type: 'FETCHED_DATE',
          time: response.data.time,
          status: response.data.status,
        });
        dispatch(fetchingDate(false));
      })

      .catch(error => {
        console.log(error)
        dispatch(fetchingDate(false));
      });
};


export function fetchingDate(fetching) {
  return {
    type: 'FETCHING_DATE',
    fetching
  }
};