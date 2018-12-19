const defaultState =
    {
      activeFormId: '1',
      userId: null,
      errorMessage: null,
      registering: null,
      signingIn: null,
      formData: {
        email: '',
        password: '',
        confirmPassword: ''
      }
    };


const signInReducer = (state = defaultState, action) => {

  switch (action.type) {
    case 'FORM_FIELD_CHANGE':
      const newFormState = { ...state.formData };
      newFormState[action.fieldName] = action.fieldValue;
      return {
        ...state,
        changed: true,
        formData: newFormState,
      };
    case 'REGISTERED':
      return {...state, userId: action.userId, errorMessage: action.errorMessage};
    case 'REGISTERING':
      return {...state, registering: action.registering};
    case 'REGISTRATION_FAILURE':
      return {...state, errorMessage: action.errorMessage};
    case 'SIGNING_IN':
      return {...state, signingIn: action.signingIn};
    case 'SIGNED_IN':
      return {...state, time: action.time, status: action.status};
    case 'SWITCH_FORMS':
      return {...state, activeFormId: action.formId};
    default:
      return state
  }
};

export default signInReducer