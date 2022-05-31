import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';
import axios from  'axios'
import { nanoid } from 'nanoid'

//jika di reload maka id nya akan undefined
export default function FormAdd() {
  const data = useSelector((state) => state.jobsReducer)

  const [input, setInput] = useState({
    id : nanoid(),
    title : "",
    description : "",
    companyId : "",
    authorId : "",
    jobType : "",
    expired : "",
  })
  const handleOnChange = (e) => {
    const { name, value } = e.target
    setInput({
      ...input,
      [name] : value
    })
  }

  const handleSubmit = () => {
    axios({
      url : 'http://localhost:3000/jobs',
      method : 'POST',
      data : input
    })
    .then((result) => {
      console.log(result, 'ini notif berhasil')
    }).catch((err) => {
      console.log(err, 'ini notif err')
    });
  }
  return (
    <>
      <h1>Hellow Form</h1>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField name='title' onChange={handleOnChange} id="standard-basic1" label="Title" variant="standard" /><br/>
        <TextField
          name='description'
          onChange={handleOnChange}
          id="standard-multiline-static"
          label="Description"
          multiline
          rows={4}
          variant="standard"
        /><br />
        <TextField name='companyId' onChange={handleOnChange} id="standard-basic3" label="Company" variant="standard" /><br/>
        <TextField name='authorId' onChange={handleOnChange} id="standard-basic4" label="Author" variant="standard" /><br/>
        <TextField name='jobType' onChange={handleOnChange} id="standard-basic5" label="Job Type" variant="standard" /><br/>
        <TextField name='expired' onChange={handleOnChange} id="standard-basic5" label="Expired" variant="standard" /><br/>
        <Button onClick={handleSubmit} variant="contained">Kirim</Button>
      </Box>
      {JSON.stringify(input)}
    </>
  );
}
