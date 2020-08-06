import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import Axios from '../../axios';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const DeleteUser = (id) => {
    Axios.delete(`/admin/user/${id}`)
}

const DeleteAd = (id) => {
    Axios.delete(`/admin/ad/${id}`)
}



const useStyles = makeStyles({
  table: {
    minWidth: 700
  },
});

const CustomizedTables = (props) => {
  const classes = useStyles();

  const Approve = (id) => {
    if(props.feature){
        Axios.get(`/ads/${id}/approve-request`)
    } else {
        Axios.get(`/ads/${id}/approve`)
    }
}

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
            <TableRow>
            <StyledTableCell>{props.header[0]}</StyledTableCell>
            {props.header.map((item,index) => (
                <StyledTableCell align="right">{props.header[index+1]}</StyledTableCell>
            ))}
            </TableRow>          
        </TableHead>
        <TableBody>
          {props.user && props.data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row._id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.firstName}</StyledTableCell>
              <StyledTableCell align="right">{row.lastName}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              <StyledTableCell align="right">+92 {row.phone}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton aria-label="delete" onClick={()=>{DeleteUser(row._id)}}>
                    <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
          {!props.user && props.data.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.title}
              </StyledTableCell>
              <StyledTableCell align="right">{row.location}</StyledTableCell>
              <StyledTableCell align="right">{row.modelYear}</StyledTableCell>
              <StyledTableCell align="right">{row.company} {row.modelName}</StyledTableCell>
              <StyledTableCell align="right">+92 {row.contact}</StyledTableCell>
              <StyledTableCell align="right">
                <IconButton aria-label="delete" onClick={()=>{DeleteAd(row._id)}}>
                    <DeleteIcon />
                </IconButton>
                <IconButton aria-label="approve" onClick={()=>{Approve(row._id)}}>
                    <CheckCircleIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomizedTables;