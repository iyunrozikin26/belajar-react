import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import axios from  'axios'
import { nanoid } from 'nanoid'
import { useNavigate, useParams } from "react-router-dom";

//jika di reload maka id nya akan undefined
export default function FormCrud() {
  let navigate = useNavigate();
  const {JobId} = useParams()
  const [input, setInput] = useState({
    id : nanoid(),
    title : "",
    description : "",
    companyId : "",
    authorId : "",
    jobType : "",
    expired : "",
  })
  useEffect(()=>{
    if(JobId){
      getJob()
    }
  }, [])
  const getJob = async () => {
    try {
      const jobDetail = await axios({
        url : `http://localhost:3000/jobs/${JobId}`,
        method : 'GET'
      })
      setInput({
        id : jobDetail.data.id,
        title : jobDetail.data.title,
        description : jobDetail.data.description,
        companyId : jobDetail.data.companyId,
        authorId : jobDetail.data.authorId,
        jobType : jobDetail.data.jobType,
        expired : jobDetail.data.expired,
      })
      console.log(jobDetail, 'ini edit crud detail')
    } catch (error) {
      console.log(error);
    }
  }
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInput({
      ...input,
      [name] : value
    })
  }

  //tinggal menggunakan navigasi jika sudah berhasil
  const handleSubmit = () => {
    axios({
      url : 'http://localhost:3000/jobs',
      method : 'POST',
      data : input
    })
    .then((result) => {
      console.log(result, 'ini notif berhasil')
      navigate("/admin-page", { replace: true });
    }).catch((err) => {
      console.log(err, 'ini notif err')
    });
  }

  const handleUpdate = () => {
    axios({
      url : 'http://localhost:3000/jobs/'+JobId,
      method : 'PUT',
      data : input
    })
    .then((result) => {
      console.log(result, 'ini notif berhasil')
      navigate("/admin-page", { replace: true });
    }).catch((err) => {
      console.log(err, 'ini notif err')
    });
  }
  return (
    <>
      <h1>Hellow Form</h1>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField value={input.title} name='title' onChange={handleOnChange} id="standard-basic1" label="Title" variant="standard" /><br/>
        <TextField
          value={input.description}
          name='description'
          onChange={handleOnChange}
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="standard"
        /><br />
        <TextField value={input.companyId} name='companyId' onChange={handleOnChange} id="standard-basic3" label="Company" variant="standard" /><br/>
        <TextField value={input.authorId} name='authorId' onChange={handleOnChange} id="standard-basic4" label="Author" variant="standard" /><br/>
        <TextField value={input.jobType} name='jobType' onChange={handleOnChange} id="standard-basic5" label="Job Type" variant="standard" /><br/>
        <TextField value={input.expired} name='expired' onChange={handleOnChange} id="standard-basic5" label="Expired" variant="standard" /><br/>
        {JobId  && 
          <Button onClick={handleUpdate} variant="contained">Edit</Button>
        }
        {!JobId  && 
        <Button onClick={handleSubmit} variant="contained">Add</Button>
        }
      </Box>
      {JSON.stringify(input)}
    </>
  );
}
