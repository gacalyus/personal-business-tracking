import React from 'react';
import { Box, Button, Grid } from '@mui/material';
import { Field, Formik } from 'formik';
import AddBoxIcon from '@mui/icons-material/AddBox';
import "../Styles/Create.css"
import * as Yup from "yup";

const JobSchema = Yup.object().shape({
    jobName: Yup.string()
        .min(4, "Minimum 4 symbols")
        .max(255, "Maximum 255 symbols")
        .required("Job Name is required"),
    priority: Yup.string()
        .oneOf(["red", "blue", "yellow"])
        .required("Priorty is required")
});



function Create({ jobList, setJobList }) {

    const submitJobHandler = (values) => {
        if (jobList.length < 1) {
            setJobList([{
                jobName: values.jobName,
                color: values.color,
                id: Math.floor(Math.random() * 1001),
                importanceLevel:
                    values.color === "red" && 1 ||
                    values.color === "yellow" && 2 ||
                    values.color === "blue" && 3
            }])
        } else {
            setJobList([
                ...jobList,
                {
                    jobName: values.jobName,
                    color: values.color,
                    id: Math.floor(Math.random() * 1001),
                    importanceLevel:
                        values.color === "red" && 1 ||
                        values.color === "yellow" && 2 ||
                        values.color === "blue" && 3
                }
            ])
        }
    }

    return (
        <>
            <Formik
                validationSchema={JobSchema}
                initialValues={{
                    jobName: '',
                    priority: '',
                }}
                onSubmit={(values) => {

                }}
            >
                {({ values, handleSubmit, }) => (

                    <form onSubmit={handleSubmit}>
                        <Box sx={{ flexGrow: 1 }} className="form-group">
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={12} lg={8}>
                                    <Field
                                        className="form-control"
                                        name="jobName"
                                        label='name'
                                        id="jobName"
                                        placeholder='Job Name'
                                        size="small"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={9} lg={3}>
                                    <Field className="form-control" label='priority' as="select" name="color">
                                        <option value="">Priority (all)</option>
                                        <option value="red">Red</option>
                                        <option value="yellow">Yellow</option>
                                        <option value="blue">Blue</option>
                                    </Field>
                                </Grid>
                                <Grid item xs={5} sm={3} lg={1}>
                                    <Button
                                        startIcon={<AddBoxIcon />}
                                        variant="contained"
                                        type="submit"
                                        onSubmit={() => handleSubmit(values)}
                                        onClick={() => submitJobHandler(values)}
                                    >
                                        Create
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </form>
                )}
            </Formik>
        </>
    )
}

export default Create;