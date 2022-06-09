import axios from  'axios'

export const fetchCompanies = () => {
  return (dispatch, getState) => {
    axios({
      url : 'http://localhost:3000/companies',
      method : 'GET'
    })
      .then((result) => {
        console.log(result.data)
        dispatch({
          type : 'getAllCompanies',
          payload : {
            companies : result.data,
            loading : false
          }
        })
      }).catch((err) => {
        console.log(err)
      });
  }
}