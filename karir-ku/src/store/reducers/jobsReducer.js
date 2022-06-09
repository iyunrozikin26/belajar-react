const init_state = {
  jobs : [],
  loading : true,
}

function jobsReducer(state = init_state, action){
  switch(action.type){
    case 'getAllJobs' :

      // tidak bisa digunakan karena meng assign sebuah data, sifat state hanya readOnly
      // state.jobs = action.payload.jobs
      // state.loading = action.payload.loading
      // console.log(...state);
      // return state

      //disarankan menggunakan spread untuk copy data

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