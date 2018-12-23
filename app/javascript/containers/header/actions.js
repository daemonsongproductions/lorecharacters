import ax from '../../packs/axios'

export const fetchAccountInfo = () => (dispatch, getState) => {

  dispatch(fetchingAccountInfo(true));

  return ax.get(`/users.json`)
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

export const signUserOut = () => (dispatch, getState) => {

  return ax.delete('/users/sign_out.json')
      .then(response => {
        window.location.href="/"
      })

};


export function fetchingAccountInfo(fetching) {
  return {
    type: 'FETCHING_ACCOUNT_INFO',
    fetching
  }
};