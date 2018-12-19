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

export const submitRegistration = (email, password, password_confirmation) => (dispatch, getState) => {

  dispatch(registering(true));

  return axios.post('/users.json')
      .then(response => {
        dispatch({
          type: 'REGISTERED',
          userId: response.data.user_id,
          errorMessage: null
        });
        dispatch(registering(false));
      })
      .catch(error => {
        dispatch({
          type: 'REGISTRATION_FAILURE',
          errorMessage: error.response.data.message
        });
        dispatch(registering(false));
      });

};

export function handleFormChange(fieldName, fieldValue) {
  return {
    type: 'FORM_FIELD_CHANGE',
    fieldName,
    fieldValue
  }
};

export function signingIn(signingIn) {
  return {
    type: 'SIGNING_IN',
    signingIn
  }
};


export function registering(registering) {
  return {
    type: 'REGISTERING',
    registering
  }
}

export function switchForms(formId) {
  return {
    type: 'SWITCH_FORMS',
    formId
  }
}