import CardJob from '../components/cardJobs.js'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { fetchJob } from '../store/actions/jobAction.js';

export default function Jobs() {

  const data = useSelector((state) => state.jobsReducer)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchJob()) //panggil fungsi fetchJob utk di dispatch didlm thunk/middleware
  }, [])

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