import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';

export default function RechargePage() {
  const [userId, setUserId] = useState('');
  const [rechargeAmount, setRechargeAmount] = useState('');

  // Function to handle the recharge process
  const handleRecharge = () => {
    // Assuming a backend API for updating the database
    // This is a placeholder for your actual API call
    // Replace this with your own API endpoint and logic
    // Here, we're just logging the values (simulating a database update)
    console.log('User ID:', userId);
    console.log('Recharge Amount:', rechargeAmount);

    // Reset the form fields after recharge
    setUserId('');
    setRechargeAmount('');
  };

  return (
    <>
      <Helmet>
        <title>Dashboard: Recharge</title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 3 }}>
          Recharge
        </Typography>

        {/* Form for user to enter UserID and Recharge Amount */}
        <div>
          <TextField
            label="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            sx={{ mr: 2 }}
          />
          <TextField
            label="Recharge Amount"
            value={rechargeAmount}
            onChange={(e) => setRechargeAmount(e.target.value)}
            sx={{ mr: 2 }}
          />
          <Button variant="contained" onClick={handleRecharge}>
            Recharge
          </Button>
        </div>
      </Container>
    </>
  );
}
