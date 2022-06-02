import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid'
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { detailJob, addJob, updateJob } from '../store/actions/jobAction';


export default function FormCrud() {
  let navigate = useNavigate();
  const dispatch = useDispatch()
  const {JobId} = useParams() //ambil params pada halaman ini jika ada pada paramsnya
  const [input, setInput] = useState({ //untuk state lokal halaman ini
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
      dispatch(detailJob((JobId)))
        .then((result) => {
          setInput({
            id : result.id,
            title : result.title,
            description : result.description,
            companyId : result.companyId,
            authorId : result.authorId,
            jobType : result.jobType,
            expired : result.expired,
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
      .then((_) => {
        navigate("/admin-page", { replace: true })
      }).catch((err) => {
        console.log(err)
      })
  }

  const handleUpdate = () => {
    dispatch(updateJob(input, JobId))
      .then((_) => {
        navigate("/admin-page", { replace: true })
      }).catch((err) => {
        console.log(err)
      })
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
    </>
  );
}
