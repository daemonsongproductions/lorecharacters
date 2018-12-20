const defaultState =
    {
      email: "",
      signedIn: false
    };


const headerReducer = (state = defaultState, action) => {


  console.log(action)
  switch (action.type) {
    case 'FETCHING_ACCOUNT_INFO':
      return {...state, fetchingAccount: action.fetching}
    case 'FETCHED_ACCOUNT_INFO':
      return {...state, email: action.email, signedIn: action.signedIn}
    default:
      return state
  }
};

export default headerReducer