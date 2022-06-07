import axios from  'axios'

export const fetchJob = () => {
  return (dispatch, getState) => {
    axios({
      url : 'http://localhost:3000/jobs',
      method : 'GET'
    })
      .then((result) => {
        dispatch({
          type : 'getAllJobs',
          payload : {
            jobs : result.data.data,
            loading : false
          }
        })
      }).catch((err) => {
        console.log(err)
      });
  }
}

export const destroyJob = (jobId) => {
  return (dispatch, getState) => {
    return new Promise ((resolve, reject)=> { //gunakan promise agar bisa navigate di admin page
      axios({
        url : 'http://localhost:3000/jobs/'+jobId,
        method : 'DELETE',
        headers : {
          access_token : localStorage.getItem('access_token')
        }
      })
        .then((result) => {
          fetchJob()
          resolve(result)
        }).catch((err) => {
          reject(err)
        })
    })
  }
}

export const detailJob = (JobId) => {
  return (dispatch, getState) => {
    return new Promise((resolve,reject) => {
      axios({
        url : `http://localhost:3000/jobs/${JobId}`,
        method : 'GET'
      })
        .then((result) => {
          resolve(result.data)
        }).catch((err) => {
          reject(err)
        })
    })
  }
}

export const addJob = (input) => {
  return (dispatch, getState) => {
    return new Promise ((resolve, reject) => {
      axios({
        url : 'http://localhost:3000/jobs',
        method : 'POST',
        data : input,
        headers : {
          access_token : localStorage.getItem('access_token')
        }
      })
        .then((result) => {
          resolve(result)
        }).catch((err) => {
          reject(err)
        });
    })
  }
}

export const updateJob = (input, JobId) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject)=> {
      axios({
        url : 'http://localhost:3000/jobs/'+JobId,
        method : 'PUT',
        data : input,
        headers : {
          access_token : localStorage.getItem('access_token')
        }
      })
      .then((result) => {
        resolve(result)
      }).catch((err) => {
        reject(err)
      });
    })
  }
}