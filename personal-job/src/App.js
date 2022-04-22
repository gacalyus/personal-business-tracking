
import { Container, Grid } from '@mui/material';
import Create from './Components/Create';
import JobList from './Components/JobList';
import Navbar from './Components/Navbar';


function App() {

  return (
    <Container style={{ display: "flex" }} maxWidth="xl">
      <Grid mt={5} container spacing={2}>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={12}>
          <Create />
        </Grid>
        <Grid item xs={12}>
          <JobList />
        </Grid>
      </Grid>
    </ Container >
  );
}

export default App;
