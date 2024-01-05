import { useNavigate } from "react-router-dom";
import { useAuthHook } from "../../hooks/useAuthHook";
import { Button, Typography, Container, Paper } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function ResetModalSuccess() {
  const { user } = useAuthHook();
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
          Reset password successfully!
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
          Your password has been successfully reset. You can now log in with
          your new password.
        </Typography>
        <Button
          type="button"
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2, marginBottom: "24px" }}
          onClick={handleBackToLogin}
        >
          Back to Login
        </Button>
        <Typography
          sx={{ textAlign: "center", fontSize: "16px" }}
          variant="body2"
          color="text.secondary"
        >
          Thank you for choosing our application.
        </Typography>
      </Paper>
    </Container>
  );
}

export default ResetModalSuccess;
