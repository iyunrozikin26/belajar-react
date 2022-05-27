import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function DetailJob () {
  const [job, setJob] = useState({})
  const [loading, setLoading] = useState(true)
  const {JobId} = useParams()
  
  useEffect(()=>{
    getJob()
  }, [])

  const getJob = async () => {
    try {
      const jobDetail = await axios({
        url : `http://localhost:3000/jobs/${JobId}`,
        method : 'GET'
      })
      setLoading(false)
      setJob(jobDetail.data)
      console.log(jobDetail)
    } catch (error) {
      console.log(error);
    }
  }


  return(
    <>
      {loading === true && 
        <Box sx={{ width: '100%' }}>
          <LinearProgress />
        </Box>
      }
      {JSON.stringify(job)}
    </>
  )
}