import React, { FunctionComponent, useState } from "react";
import {
    FormControl,
    InputAdornment,
    TextField,
    createStyles,
    makeStyles,
    MenuItem
} from "@material-ui/core";
import { Field, Formik } from 'formik';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from "@material-ui/icons/Clear";
import { Box } from "@mui/material";
import { Grid } from '@mui/material';



const Filter = ({ setJobList, setInputJob, jobList }) => {
    const priorityOrder = (e) => {

        if (e.target.value === "important") {

            setInputJob(jobList.sort(function (a, b) {
                return a.importanceLevel - b.importanceLevel
            }))
        } else {
            setInputJob(jobList.sort(function (b, a) {
                return a.importanceLevel - b.importanceLevel
            }))
        }
        setJobList(jobList)
    }
    const handleChange = (e) => {
        const filterValue = e.target.value.toLowerCase();
        let newList = [
            ...jobList
        ]
        newList = jobList.filter((job) => {
            return job.jobName.toLowerCase().indexOf(filterValue) !== -1
        })

        setJobList(e.target.value === "" ? jobList : newList);

    };


    return (
        <div id="app">
            <Formik
                initialValues={{}}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >
                {({ handleSubmit }) => (

                    <form onSubmit={handleSubmit}>
                        <Box sx={{ flexGrow: 1 }} className="form-group">
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={8}>
                                    <TextField
                                        id="outlined-multiline-flexible"
                                        label="Search Job"
                                        multiline
                                        maxRows={4}
                                        fullWidth
                                        onChange={handleChange}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <SearchIcon />
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={6} md={4} style={{ marginTop: "9px" }} >
                                    <select onChange={priorityOrder} className="form-control" label='priority' as="select" name="color">
                                        <option value="">Priority (all)</option>
                                        <option value="important">important to unimportant</option>
                                        <option value="unimportant">unimportant to important</option>
                                    </select>
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Filter;
