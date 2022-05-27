import CardJob from '../components/cardJobs.js'
import { useEffect, useState } from 'react';
import axios from  'axios'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function Jobs() {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{
    getAllJobs()
  }, [])

  const getAllJobs = async () => {
    try {
      const allJobs = await axios({
        url : 'http://localhost:3000/jobs',
        method : 'GET'
      })
      setJobs(allJobs.data)
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    {loading === true && 
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    }
    <CardJob data={jobs}/>
  </>
  );
}