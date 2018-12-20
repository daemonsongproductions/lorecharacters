import ax from 'packs/axios'

export const signIn = () => (dispatch, getState) => {

  dispatch(signingIn(true));

  return ax.get(`/status.json`)
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
  const state = getState();
  const formData = state.signInState.formData

  return ax.post('/users.json', {
    user: {
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.confirmPassword
    }
  })
      .then(response => {
        dispatch({
          type: 'REGISTERED',
          userId: response.data.user_id,
          errorMessage: null
        });
        dispatch(registering(false));
        window.location.href="/"
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