import { Button, Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Box } from "@mui/material";
import { useContext, useState } from "react";
import { JobContext } from "../../App"
import Priority from "./Priority";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import DialogTitle from '@mui/material/DialogTitle';



function JobTable({ setJobList }) {

    const context = useContext(JobContext)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const deleteHandler = (d) => {
        setJobList(context.filter((del) => del.id !== d))
    }
    return (
        <div className="JobTable">
            <h3>Job List</h3>
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Priority</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {context.map((cell) => (
                            < TableRow key={cell.id} >
                                <TableCell component="th" scope="row">
                                    {cell.jobName}
                                </TableCell>
                                <TableCell align="right">
                                    <Priority
                                        color={cell.color} />
                                </TableCell>
                                <TableCell align="right">
                                    <EditIcon sx={{ mr: 2 }} />
                                    <DeleteIcon onClick={handleOpen} />
                                    <Dialog
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="alert-dialog-title"
                                        aria-describedby="alert-dialog-description"
                                    >
                                        <DialogTitle id="alert-dialog-title">
                                            Are you sure you want to delete this job?
                                        </DialogTitle>
                                        <WarningAmberIcon color="warning" fontSize="large" style={{ marginLeft: "auto", marginRight: "auto" }} />
                                        <DialogContent>
                                        </DialogContent>
                                        <DialogActions>
                                            <Button onClick={handleClose}>Disagree</Button>
                                            <Button onClick={() => {
                                                deleteHandler(cell.id)
                                                handleClose()
                                            }
                                            }> Agree</Button>
                                        </DialogActions>
                                    </Dialog>

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div >
    );
}

export default JobTable;