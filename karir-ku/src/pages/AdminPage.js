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
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { fetchJob, destroyJob } from '../store/actions/jobAction';

export default function BasicTable() {
  let navigate = useNavigate();

  const rows = useSelector((state) => state.jobsReducer.jobs)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchJob())
  }, [])
 
  const deleteJob = (jobId) => {
    dispatch(destroyJob(jobId))
      .then((result) => {
        dispatch(fetchJob()) //panggil lg/dispatch lg jika ingin update data jobs
        navigate("/admin-page", { replace: true });
      }).catch((err) => {
        console.log(err)
      })
  }

  const detailJob = async (jobId) => {
    navigate("/crud-jobs/"+jobId, { replace: true });
  }
  return (
    <>
    <Link to='/crud-jobs' style={{ textDecoration: 'none', color:'white' }}><Button variant="contained">ADD</Button></Link>
    
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
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.jobType}</TableCell>
                <TableCell align="right">Nama Company nya disini</TableCell>
                <TableCell align="right">{row.expired}</TableCell>
                <TableCell align="right"><Button variant="contained" onClick={()=> {detailJob(row.id)}}>Edit</Button><Button variant="contained" onClick={()=> {deleteJob(row.id)}}>Hapus</Button></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
