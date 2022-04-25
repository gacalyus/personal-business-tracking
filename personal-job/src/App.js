import React, { useEffect, useState } from 'react';
import { Container, Grid } from '@mui/material';
import { createContext } from 'react';
import Create from './Components/Create';
import JobList from './Components/JobList';
import Navbar from './Components/Navbar';

export const JobContext = createContext()


function App() {
  const [inputJob, setInputJob] = useState("")
  const [jobList, setJobList] = useState([])
  const [filteredJobs, setFilteredJobs] = useState([])

  // useEffect(() => {
  //   setInputJob(jobList.sort(function (a, b) {
  //     return a.importanceLevel - b.importanceLevel
  //   }))
  // }, [jobList])

  return (
    <JobContext.Provider value={jobList}>
      <Container style={{ display: "flex" }} maxWidth="xl">
        <Grid mt={5} container spacing={2}>
          <Grid item xs={12}>
            <Navbar />
          </Grid>
          <Grid item xs={12}>
            <Create
              jobList={jobList}
              setJobList={setJobList}
              setInputJob={setInputJob} />
          </Grid>
          <Grid item xs={12}>
            <JobList
              setFilteredJobs={setFilteredJobs}
              filteredJobs={filteredJobs}
              jobList={jobList}
              setInputJob={setInputJob}
              setJobList={setJobList}
            />
          </Grid>
        </Grid>
      </ Container >
    </JobContext.Provider>
  );
}

export default App;
