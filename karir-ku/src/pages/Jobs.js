import CardJob from '../components/cardJobs.js'
import { useEffect, useState } from 'react';
import axios from  'axios'

export default function Jobs() {
  const [jobs, setJobs] = useState([])

  useEffect(()=>{
    getAllJobs()
  }, [])

  const getAllJobs = async () => {
    const allJobs = await axios({
      url : 'http://localhost:3000/jobs',
      method : 'GET'
    })
    setJobs(allJobs.data)
  }

  return (
    <>
    <CardJob data={jobs}/>
  </>
  );
}