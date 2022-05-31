import CardJob from '../components/cardJobs.js'
import axios from  'axios'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Jobs() {

  const data = useSelector((state) => state.jobsReducer)

  const dispatch = useDispatch();

  useEffect(()=>{
    getAllJobs()
  }, [])


  const getAllJobs = async () => {
    try {
      const allJobs = await axios({
        url : 'http://localhost:3000/jobs',
        method : 'GET'
      })
      dispatch({
        type : 'getAllJobs',
        payload : {
          jobs : allJobs.data,
          loading : false
        }
      })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    {data.loading === true && 
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    }
    <CardJob data={data.jobs}/>
  </>
  );
}