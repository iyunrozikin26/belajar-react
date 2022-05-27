import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

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
    {/* {JSON.stringify(props.data)} */}
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
                  <Link to={`detail/${el.id}`} ><Button size="small">Learn More</Button></Link>
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