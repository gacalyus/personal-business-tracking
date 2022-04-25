
import { Grid } from '@mui/material';
import Filter from './JobComponent/Filter';
import JobTable from './JobComponent/JobTable';


function JobList({ setJobList, setInputJob, jobList, setFilteredJobs, filteredJobs, setEditPriority }) {

    return (

        <Grid mt={5} container spacing={2}>

            <Grid item xs={12}>
                <Filter
                    setFilteredJobs={setFilteredJobs}
                    filteredJobs={filteredJobs}
                    setJobList={setJobList}
                    jobList={jobList}
                    setInputJob={setInputJob} />
            </Grid>

            <Grid item xs={12}>
                {
                    jobList.length < 1 ?
                        <h1>Please add job..</h1>
                        :
                        <JobTable setJobList={setJobList} />
                }
            </Grid>
        </Grid >
    );
}

export default JobList;
