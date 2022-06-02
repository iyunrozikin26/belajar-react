import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { fetchCompanies } from '../store/actions/companiesAction.js';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Jobs() {

  const data = useSelector((state) => state.companyReducer)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchCompanies()) //panggil fungsi fetchJob utk di dispatch didlm thunk/middleware
  }, [])

  return (
    <>
    {data.loading === true && 
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    }
    <Box sx={{ flexGrow: 1 }}>
        {data.companies.map((el)=>{
          return (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item xs={12} sm={4} md={3}>
                <Item>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      {el.companyLogo}
                    </Typography>
                    <Typography variant="h5" component="div">
                      {el.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {el.email}
                    </Typography>
                  </CardContent>
                </Item>
              </Grid>
            </Grid>
          )
        })}
      </Box>
  </>
  );
}