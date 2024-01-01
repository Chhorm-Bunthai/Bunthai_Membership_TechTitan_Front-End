import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useHook } from "../hooks/useHook";
import { useNavigate } from "react-router-dom";

export default function forgotpassword() {
  const navigate = useNavigate();
  const { forgetPassword, user } = useHook();
  const [email, setEmail] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    await forgetPassword(email);
    if (user) {
      await navigate("/success");
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Forgot Password?
        </Typography>
        <Typography component="h1" sx={{ fontWeight: 500, mt:1, textAlign: 'center' }}>
          Please provide your email, We will send verification link to you gmail
          account.
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
            send
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
