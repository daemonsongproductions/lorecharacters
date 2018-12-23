const defaultState =
    {
      time: null,
      status: 'unknown'
    };


const landingReducer = (state = defaultState, action) => {

  var messageType, status;

  console.log(action)
  switch (action.type) {
    case 'FETCHING_DATE':
      return {...state, fetchingDate: action.fetching}
    case 'FETCHED_DATE':
      return {...state, time: action.time, status: action.status}
    default:
      return state
  }
}

function updateMessages(messages, messageType, newMessage) {

  const newMessages = messages.filter(message => message.messageType !== messageType);
  return [...newMessages, newMessage]
}

export default landingReducer