import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useState } from "react";
import { useAuthHook } from "../../hooks/useAuthHook";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";

export default function forgotpassword() {
  const navigate = useNavigate();
  const { forgetPassword, user } = useAuthHook();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (event) => {
    setLoading(true);
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
        <Typography
          component="h1"
          sx={{ fontWeight: 500, mt: 1, textAlign: "center" }}
        >
          Please provide your email, We will send verification link to you gmail
          account.
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1, width: "100%" }}
        >
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
          <LoadingButton
            loading={loading}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ my: 2 }}
          >
            <span>Sign Up</span>
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
}
