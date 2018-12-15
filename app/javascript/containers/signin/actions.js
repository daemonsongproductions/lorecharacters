import axios from 'axios'

export const signIn = () => (dispatch, getState) => {

  dispatch(signingIn(true));

  return axios.get(`/status.json`)
      .then(response => {
        dispatch({
          type: 'SIGNED_IN'
        });
        dispatch(signingIn(false));
      })

      .catch(error => {
        console.log(error)
        dispatch(signingIn(false));
      });
};


export function signingIn(signingIn) {
  return {
    type: 'SIGNING_IN',
    signingIn
  }
};