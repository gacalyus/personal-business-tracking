
import { Grid } from '@mui/material';
import Filter from './JobComponent/Filter';
import JobTable from './JobComponent/JobTable';


function JobList() {

    return (

        <Grid mt={5} container spacing={2}>
            <Grid item xs={12}>
                <Filter />
            </Grid>
            <Grid item xs={12}>
                <JobTable />
            </Grid>
        </Grid>

    );
}

export default JobList;
