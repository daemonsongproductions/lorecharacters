const initialState =
    {

    };


const headerReducer = (state = initialState, action) => {

  var messageType, status;

  console.log(action)
  switch (action.type) {
    default:
      return state
  }
}

function updateMessages(messages, messageType, newMessage) {

  const newMessages = messages.filter(message => message.messageType !== messageType);
  return [...newMessages, newMessage]
}

export default headerReducer