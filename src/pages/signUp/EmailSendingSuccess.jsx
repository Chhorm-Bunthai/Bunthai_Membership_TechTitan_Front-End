import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

export default function EmailSendingSuccess() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };
  return (
    <Box
      sx={{
        maxWidth: "600px",
        margin: "auto",
      }}
    >
      <Card
        sx={{
          marginTop: "120px",
          paddingTop: "24px",
          paddingBottom: "24px",
        }}
      >
        <Typography
          sx={{ textAlign: "center", fontWeight: "bold" }}
          gutterBottom
          variant="h4"
          component="div"
        >
          Verification Link Sent
        </Typography>
        <CardMedia
          sx={{
            height: 100,
            width: 100,
            objectFit: "cover",
            margin: "16px auto",
          }}
          image="https://static-00.iconduck.com/assets.00/mail-icon-2048x2048-525ey8hu.png"
          title="Green Iguana"
        />

        <CardContent>
          <Typography
            sx={{ textAlign: "center", fontSize: "16px" }}
            variant="body2"
            color="text.secondary"
          >
            Please check your email inbox for a verification link. We've sent an
            email to you with a link to verify your account.
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "16px",
            }}
            variant="body2"
            color="text.secondary"
          >
            Pleas use the link below to login to your account.
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={handleClick}
            sx={{ margin: "auto", marginBottom: "24px" }}
            variant="contained"
          >
            Back to login
          </Button>
        </CardActions>
        <Typography
          sx={{ textAlign: "center", fontSize: "16px" }}
          variant="body2"
          color="text.secondary"
        >
          Thank you for choosing our application.
        </Typography>
      </Card>
    </Box>
  );
}
