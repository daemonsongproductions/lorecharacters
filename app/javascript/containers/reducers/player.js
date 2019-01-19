const defaultState =
    {
      fetchingPlayer: true,
      player: {}
    };


const playerReducer = (state = defaultState, action) => {


  console.log(action)
  switch (action.type) {
    case 'FETCHING_PLAYER':
      return {...state, fetchingPlayer: action.fetching};
    case 'FETCHED_PLAYER':
      return {...state, player: {name: action.name}}
    default:
      return state
  }
};

export default playerReducer