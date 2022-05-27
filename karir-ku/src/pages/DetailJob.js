import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios'

export default function DetailJob () {
  const [job, setJob] = useState({})
  const {JobId} = useParams()
  
  useEffect(()=>{
    getJob()
  }, [])

  const getJob = async () => {
    const jobDetail = await axios({
      url : `http://localhost:3000/jobs/${JobId}`,
      method : 'GET'
    })
    setJob(jobDetail.data)
    console.log(jobDetail)
  }


  return(
    <>
      <h1>Hello Detail</h1>
      {JSON.stringify(job)}
    </>
  )
}