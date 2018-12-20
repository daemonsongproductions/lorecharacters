import axios from 'axios'

export const fetchAccountInfo = () => (dispatch, getState) => {

  dispatch(fetchingAccountInfo(true));

  return axios.get(`/users.json`)
      .then(response => {
        dispatch({
          type: 'FETCHED_ACCOUNT_INFO',
          email: response.data.email,
          signedIn: response.data.signed_in
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