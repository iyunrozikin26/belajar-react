import axios from  'axios'

export const addUser = (input) => {
  return (dispatch, getState) => {
    axios({
      url : 'http://localhost:3000/users',
      method : 'POST',
      data : input
    })
      .then((result) => {
        console.log(result)
      }).catch((err) => {
        console.log(err)
      });
  }
}