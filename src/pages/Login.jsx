import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import { Alert, AlertTitle } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useAuthHook } from "../hooks/useAuthHook";
import { useState } from "react";

export default function SignIn() {
  const navigate = useNavigate();
  const { login, error } = useAuthHook();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.up("sm"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(email, password);
    navigate("/");
  };

  return (
    <Container component="main" maxWidth={matchesSM ? "sm" : "xs"}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: matchesSM ? 8 : 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: matchesSM ? 3 : 2,
        }}
      >
        <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>
          Log in
        </Typography>
        <Typography component="h1" variant={matchesSM ? "h5" : "h6"}>
          Welcome!
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          {error ? (
            <Box sx={{ mb: 1 }}>
              <Alert severity="error">
                <AlertTitle>{error}</AlertTitle>
                Please Checkout email or Password again
              </Alert>
            </Box>
          ) : (
            ""
          )}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            helperText="required"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            helperText="required"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Grid container justifyContent="space-between" alignItems="center">
            <Grid item>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
            </Grid>
            <Grid item>
              <Link to="/forgotpassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
              padding: matchesSM ? "8px 16px" : "6px 12px",
              fontSize: matchesSM ? "1rem" : "0.875rem",
            }}
          >
            Log in
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
