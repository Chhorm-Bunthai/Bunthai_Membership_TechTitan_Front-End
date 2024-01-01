import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import { useHook } from "../hooks/useHook";
import { useNavigate } from "react-router-dom";
import Success from "../pages/ForgotEmailSuccess";

export default function forgotpassword({ open, onClose }) {
  // const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();
  const { forgetPassword, user } = useHook();
  const [email, setEmail] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    await forgetPassword(email);
    if (user) {
      navigate("/success");
    }
  };

  return (
    <React.Fragment>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Forget Password?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            please provide your email address, we will send verification link to
            your email...
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" onClick={handleSubmit}>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
