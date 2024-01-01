import React from "react";
import { useNavigate } from "react-router-dom";
import { useHook } from "../hooks/useHook";
import { Box, Button, Typography, Container, Paper } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function ResetModalSuccess() {
  const { user } = useHook();
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    if (user) {
      navigate("/login");
    }
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          mt: 10,
          p: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "background.paper",
        }}
      >
        <CheckCircleIcon color="success" sx={{ fontSize: 60, mt: 1 }} />
        <Typography component="h1" variant="h5" sx={{ mt: 2 }}>
          Password Reset Successful
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Your password has been successfully reset. You can now log in with
          your new password.
        </Typography>
        <Button
          type="button"
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
          onClick={handleBackToLogin}
        >
          Back to Login
        </Button>
      </Paper>
    </Container>
  );
}

export default ResetModalSuccess;
