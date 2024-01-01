import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Typography, Container, Paper } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';

function EmailSuccessPage() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/'); // Adjust the path as needed for your home page or dashboard
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ mt: 10, p: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <EmailIcon color="success" sx={{ fontSize: 60, mt: 1 }} />
        <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
          Email Sent Successfully!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          We've sent a message to your email address with further instructions.
        </Typography>
        <Button
          type="button"
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleBackToHome}
        >
          Go back to Login 
        </Button>
      </Paper>
    </Container>
  );
}

export default EmailSuccessPage;