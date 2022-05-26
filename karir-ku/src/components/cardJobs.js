import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function CardJob(props){
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {props.data.map((el) => (
            <Grid item xs={2} sm={4} md={3} key={el.id}>
              <Item>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {el.jobType}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {el.title}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {el.Company.name}
                  </Typography>
                  <Typography variant="body2">
                    expired : {el.expired} (xx hari lagi)
                    <br />
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}


export default CardJob

// import React from "react";

// class CardJob extends React.Component {
//   render() {
//     return (
//       <ul>
//         <li>Title : {this.props.job.title}</li>
//         <li>description : {this.props.job.description}</li>
//         <li>Job Type : {this.props.job.jobType}</li>
//         <li>Company Name: {this.props.job.Company.name}</li>
//       </ul>
//     )
//   }
// }
