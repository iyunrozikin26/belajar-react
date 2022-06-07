import Navbar from '../components/Navbar.js'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { detailJob, addJob, updateJob } from '../store/actions/jobAction';


export default function FormCrud() {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const {JobId} = useParams() //ambil params pada halaman ini jika ada pada paramsnya
  const [input, setInput] = useState({
    name : "",
    companyLogo : "",
    location : "",
    email : "",
    descriptionCompany : "",
    title : "",
    descriptionJob : "",
    jobType : ""

  })
  useEffect(()=>{
    if(JobId){
      dispatch(detailJob((JobId)))
        .then((result) => {
          console.log(result)
          setInput({
            name : result.data.Company.name,
            companyLogo : result.data.Company.companyLogo,
            location : result.data.Company.location,
            email : result.data.Company.email,
            descriptionCompany : result.data.Company.description,
            title : result.data.title,
            descriptionJob : result.data.description,
            jobType : result.data.jobType,
            companyId : result.data.companyId
          })
        }).catch((err) => {
          console.log(err);
        });

    }
  }, [])
 
  const handleOnChange = (e) => { //ketika ada perubahan pada form, maka fungsi ini berjalan dan mengubah state
    const { name, value } = e.target
    setInput({ // mengeset input menjadi yg terbaru ketika ada perubahan pada form
      ...input,
      [name] : value
    })
  }

  const handleSubmit = () => {
    dispatch(addJob(input))
      .then((result) => {
        console.log(result)
        navigate("/", { replace: true })
      }).catch((err) => {
        console.log(err)
      })
  }

  const handleUpdate = () => {
    dispatch(updateJob(input, JobId))
      .then((_) => {
        navigate("/", { replace: true })
      }).catch((err) => {
        console.log(err)
      })
  }
  return (
    <>
      <Navbar />
      <center>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField value={input.name} name='name' onChange={handleOnChange} id="standard-basic1" label="Name Company" variant="standard" /><br/>
        <TextField value={input.companyLogo} name='companyLogo' onChange={handleOnChange} id="standard-basic1" label="Logo Company" variant="standard" /><br/>
        <TextField value={input.location} name='location' onChange={handleOnChange} id="standard-basic1" label="Location Company" variant="standard" /><br/>
        <TextField value={input.email} name='email' onChange={handleOnChange} id="standard-basic1" label="Email Company" variant="standard" /><br/>
        <TextField
          value={input.descriptionCompany}
          name='descriptionCompany'
          onChange={handleOnChange}
          id="standard-multiline-static"
          label="Description Company"
          multiline
          rows={4}
          variant="standard"
        /><br />
        <TextField value={input.title} name='title' onChange={handleOnChange} id="standard-basic1" label="Title Jobs" variant="standard" /><br/>
        <TextField
          value={input.descriptionJob}
          name='descriptionJob'
          onChange={handleOnChange}
          id="standard-multiline-static"
          label="Description Job"
          multiline
          rows={4}
          variant="standard"
        /><br />
        <TextField value={input.jobType} name='jobType' onChange={handleOnChange} id="standard-basic5" label="Job Type" variant="standard" /><br/>
        {JobId  && 
          <Button onClick={handleUpdate} variant="contained">Edit</Button>
        }
        {!JobId  && 
        <Button onClick={handleSubmit} variant="contained">Add</Button>
        }
      </Box>
      </center>
    </>
  );
}
