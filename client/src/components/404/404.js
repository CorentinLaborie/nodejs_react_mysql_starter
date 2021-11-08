import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// assets //
import Img404 from '../../assets/images/404.jpg'

export default function FourZeroFour() {

return (
  <Container sx={{ mt: 10 }} component="main" maxWidth="xs">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <img src={Img404} alt="Selfie of myself holding an 404 card"/>
        </Grid>
      </Grid>
  </Container>
);
}