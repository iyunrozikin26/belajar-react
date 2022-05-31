import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import axios from  'axios'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

export default function BasicTable() {
  const rows = useSelector((state) => state.jobsReducer.jobs)

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
    <Link to='/add-jobs' style={{ textDecoration: 'none', color:'white' }}><Button variant="contained">ADD</Button></Link>
    
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Job Type</TableCell>
              <TableCell align="right">Company</TableCell>
              <TableCell align="right">Expired</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.jobType}</TableCell>
                <TableCell align="right">Nama Company nya disini</TableCell>
                <TableCell align="right">{row.expired}</TableCell>
                <TableCell align="right">tombol</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
