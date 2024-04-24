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

function createData(ID, dateTime, amount) {
  return { ID, dateTime, amount };
}

const rows = [
  createData('TRX20231028-001','2023-10-28 09:30:00',1055),
  createData('TID567891','2023-11-15 15:45:30',4000),
  createData('TXN2023-1028-002','2023-12-05 18:20:15',700),
  createData('234TRX5678','2023-09-10 14:05:00',250),
  createData('TID-ABCD-9876','2023-08-22 20:15:45',10),
];

export default function  BalancePage() {
  
  return (
    <>
      <Helmet>
        <title>   Dashboard: Balance </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 3 }}>
         Balance
        </Typography>
      </Container>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell>Transaction/Fine ID</TableCell>
              <TableCell align="right">Last Transaction Date and Time</TableCell>
              <TableCell align="right">Account Balance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.ID} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row"> {row.ID} </TableCell>
                <TableCell align="right">{row.dateTime}</TableCell>
                <TableCell align="right">{row.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}


