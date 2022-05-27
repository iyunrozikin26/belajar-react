import { useState } from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link } from "react-router-dom";

function Navbar() {
  const [pages, setPages] = useState([
    ["Jobs","jobs"],
    ["Companies","companie"],
    ["Skills", "skills"]
  ])
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <Link to='/' style={{ textDecoration: 'none', color:'white' }}>KARIR-KU</Link>
            </Typography>
            {pages.map((page) => (
              <MenuItem key={page}>
                <Link to={page[1]} style={{ textDecoration: 'none', color:'white' }}><Typography textAlign="center">{page[0]}</Typography></Link>
              </MenuItem>
            ))}
            <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </>

  )
}

export default Navbar