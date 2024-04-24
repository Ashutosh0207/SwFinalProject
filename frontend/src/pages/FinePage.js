import { Helmet } from 'react-helmet-async';
import { Container, Typography } from '@mui/material';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// ----------------------------------------------------------------------

function createData(fineID, dateTime, tollLocation, fineAmount, deadline, status ) {
  return { fineID, dateTime, tollLocation, fineAmount, deadline, status };
}

const rows = [
  createData('TRX20231028-001','2023-10-28 09:30:00','Delhi',155,"2023-11-13",'Unpaid'),
  createData('TID567891','2023-11-15 15:45:30','Bangalore',140,"2023-11-30",'Unpaid'),
  createData('TXN2023-1028-002','2023-12-05 18:20:15','Bombay',170,"2023-12-20",'Unpaid'),
  createData('234TRX5678','2023-09-10 14:05:00','Kerala',125,"2023-09-30",'Unpaid'),
  createData('TID-ABCD-9876','2023-08-22 20:15:45','Jammu',110,"2023-09-07",'Unpaid'),
];


export default function  FinePage() {
  
  return (
    <>
      <Helmet>
        <title>  Dashboard: Fine </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Fine
        </Typography>
      </Container>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Fine ID</TableCell>
              <TableCell align="right">Date and Time</TableCell>
              <TableCell align="right">Toll Location</TableCell>
              <TableCell align="right">Fine Amount</TableCell>
              <TableCell align="right">Payment Deadline</TableCell>
              <TableCell align="right">Payment Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.fineID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row"> {row.fineID} </TableCell>
                <TableCell align="right">{row.dateTime}</TableCell>
                <TableCell align="right">{row.tollLocation}</TableCell>
                <TableCell align="right">{row.fineAmount}</TableCell>
                <TableCell align="right">{row.deadline}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}


