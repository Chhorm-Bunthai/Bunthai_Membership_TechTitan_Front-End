import { Box, Typography, Button } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useNavigate } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";

function Success() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <CheckCircleOutlineIcon sx={{ fontSize: 100, color: "success.main" }} />
      <Typography variant="h5" align="center" mt={2}>
        Reset Password link has been sent to your email.
      </Typography>
      <Button variant="contained" onClick={handleLoginClick} mb={2}>
        Back to Login
      </Button>
    </Box>
  );
}

export default Success;
