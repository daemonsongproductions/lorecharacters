const defaultState =
    {
      email: "",
      username: ""
    };


const headerReducer = (state = defaultState, action) => {


  console.log(action)
  switch (action.type) {
    case 'FETCHING_ACCOUNT_INFO':
      return {...state, fetchingDate: action.fetching}
    case 'FETCHED_ACCOUNT_INFO':
      return {...state, time: action.time, status: action.status}
    default:
      return state
  }
};

function updateMessages(messages, messageType, newMessage) {

  const newMessages = messages.filter(message => message.messageType !== messageType);
  return [...newMessages, newMessage]
}

export default headerReducer