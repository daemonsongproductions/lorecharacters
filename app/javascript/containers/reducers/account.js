const defaultState =
    {
      email: "",
      name: ""
    };


const accountReducer = (state = defaultState, action) => {


  console.log(action)
  switch (action.type) {
    case 'FETCHED_ACCOUNT_INFO':
      return {...state, email: action.email, name: action.name}
    default:
      return state
  }
};

export default accountReducer;