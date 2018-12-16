const defaultState =
    {
      activeFormId: '1'
    };


const signInReducer = (state = defaultState, action) => {

  console.log(action);
  switch (action.type) {
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