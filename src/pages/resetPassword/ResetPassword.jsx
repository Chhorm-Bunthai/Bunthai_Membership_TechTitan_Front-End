import { useState } from "react";

import { Button, TextField, Container, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useAuthHook } from "../../hooks/useAuthHook";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";

const ResetPassword = () => {
  const { resetPassword } = useAuthHook();
  const { token } = useParams();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const isResetSuccessful = await resetPassword(
      password,
      passwordConfirm,
      token
    );
    console.log(isResetSuccessful, "ddss");
    if (isResetSuccessful) {
      navigate("/resetSuccess");
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        marginTop: "100px",
        // padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h4">
        New Password
      </Typography>
      <Typography
        component="h1"
        sx={{ fontWeight: 500, mt: 1, textAlign: "center" }}
      >
        Please enter your new password
      </Typography>
      <form onSubmit={handleSubmit} style={{ marginTop: "10px" }}>
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          margin="normal"
          required
          fullWidth
          variant="outlined"
          helperText="required"
          id="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          name="password"
          autoComplete="new-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          style={{ marginBottom: "10px" }}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
          margin="normal"
          required
          helperText="required"
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          type={showConfirmPassword ? "text" : "password"}
          name="passwordConfirm" // This should match the property name in the data state
          autoComplete="new-password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle confirm password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        {/* <Button
          onClick={handleSubmit}
          type="submit"
          fullWidth
          variant="contained"
        >
          send
        </Button> */}
        <LoadingButton
          loading={loading}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ my: 2 }}
        >
          Submit
        </LoadingButton>
      </form>
    </Container>
  );
};

export default ResetPassword;
