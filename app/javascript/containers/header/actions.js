import axios from 'axios'

export const fetchAccountInfo = () => (dispatch, getState) => {

  dispatch(fetchingAccountInfo(true));

  return axios.get(`/sessions.json`)
      .then(response => {
        dispatch({
          type: 'FETCHED_ACCOUNT_INFO',
          user_id: response.data.user_id,
          status: response.data.username,
        });
        dispatch(fetchingAccountInfo(false));
      })

      .catch(error => {
        console.log(error)
        dispatch(fetchingAccountInfo(false));
      });
};


export function fetchingAccountInfo(fetching) {
  return {
    type: 'FETCHING_ACCOUNT_INFO',
    fetching
  }
};