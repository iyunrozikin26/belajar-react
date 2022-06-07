const init_state = {
  jobs : [],
  loading : true,
}

function jobsReducer(state = init_state, action){
  switch(action.type){
    case 'getAllJobs' :
      return {
        ...state,
        jobs : action.payload.jobs,
        loading : action.payload.loading
      }
    default:
      return state;
  }
}

export default jobsReducer