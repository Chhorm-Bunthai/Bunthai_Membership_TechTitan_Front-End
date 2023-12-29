import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useHook } from "../hooks/useHook";

export default function HomePage() {
  const { logout } = useHook();
  const handleClick = async () => {
    await logout();
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Above and Beyond
          </Typography>
          <Link to="/login">
            <Button style={{ color: "white" }} onClick={handleClick}>
              lOGOUT
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
