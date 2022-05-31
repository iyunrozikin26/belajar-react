import { createStore } from 'redux';

const init_state = {
  jobs : [],
  loading : true
}

function jobsReducer(state = init_state, action){
  switch(action.type){
    case 'getAllJobs' :
      state.jobs = action.payload.jobs
      state.loading = action.payload.loading
      return state
    default:
      return state;
  }
}

const store = createStore(jobsReducer)

export default store