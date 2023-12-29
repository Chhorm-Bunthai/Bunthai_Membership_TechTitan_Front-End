import { Alert, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function success() {
    const navigate = useNavigate();
  return (
    <>
      <Alert severity="success">
        Reset Password link has been sent to you email.
      </Alert>
      <Button onClick={()=> navigate('/login')}>Click here to return</Button>
    </>
  );
}

export default success;
