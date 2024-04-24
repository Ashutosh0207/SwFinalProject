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

function createData(transactionID, dateTime,tollLocation, amount, paymentStatus, ) {
  return { transactionID, dateTime,tollLocation,amount, paymentStatus,  };
}

const rows = [
  createData('TRX20231028-001','2023-10-28 09:30:00','Delhi',55,'Paid'),
  createData('TID567891','2023-11-15 15:45:30','Bangalore',40,'Paid'),
  createData('TXN2023-1028-002','2023-12-05 18:20:15','Bombay',70,'Paid'),
  createData('234TRX5678','2023-09-10 14:05:00','Kerala',25,'Paid'),
  createData('TID-ABCD-9876','2023-08-22 20:15:45','Jammu',10,'Paid'),
];

export default function  PaymentPage() {
  
  return (
    <>
      <Helmet>
        <title>  Dashboard: Payment </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Payment
        </Typography>
      </Container>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Transaction ID</TableCell>
              <TableCell align="right">Date and Time</TableCell>
              <TableCell align="right">Toll Location</TableCell>
              <TableCell align="right">Amount Paid</TableCell>
              <TableCell align="right">Payment Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.transactionID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row"> {row.transactionID} </TableCell>
                <TableCell align="right">{row.dateTime}</TableCell>
                <TableCell align="right">{row.tollLocation}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
                <TableCell align="right">{row.paymentStatus}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

