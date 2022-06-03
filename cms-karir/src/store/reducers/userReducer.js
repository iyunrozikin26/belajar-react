const init_state = {
  users : [],
  loading : true,
}

function userReducer(state = init_state, action){
  switch(action.type){
    case 'getAllUser' :
      return {
        ...state,
        users : action.payload.users,
        loading : action.payload.loading
      }
    default:
      return state;
  }
}

export default userReducer