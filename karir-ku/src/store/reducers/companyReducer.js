const init_state = {
  companies : [],
  loading : true,
}

function companyReducer(state = init_state, action){
  switch(action.type){
    case 'getAllCompanies' :
      return {
        ...state,
        companies : action.payload.companies,
        loading : action.payload.loading
      }
    default:
      return state;
  }
}

export default companyReducer