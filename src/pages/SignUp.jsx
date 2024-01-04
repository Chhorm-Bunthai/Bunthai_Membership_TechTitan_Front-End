import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useAuthHook } from "../hooks/useAuthHook";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { addErrorIntoField } from "../utils/ErrorField";
import ErrorMessage from "../utils/ErrorMessage";

//  create Schema validation
const Schema = yup.object({
  fullname: yup.string().required("Name is Required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("password is required"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Password does not match"),
});
export default function SignUp() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    resolver: yupResolver(Schema),
  });

  console.log(errors, "errors");
  const navigate = useNavigate();
  const { signup } = useAuthHook();
  const handleFormSubmit = async (formData) => {
    const { fullname, email, password, passwordConfirm } = formData;
    try {
      await signup(fullname, email, password, passwordConfirm);
      navigate("/login");
    } catch (error) {
      console.log(error);
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
        <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>
          Sign up
        </Typography>
        <Typography component="h1">Create New Account</Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit(handleFormSubmit)}
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="fullname"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...addErrorIntoField(errors?.fullname)}
                    fullWidth
                    id="lastname"
                    label="FullName"
                  />
                )}
              />
              {errors.fullname ? (
                <ErrorMessage message={errors.fullname.message} />
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...addErrorIntoField(errors?.email)}
                    fullWidth
                    id="email"
                    label="email"
                  />
                )}
              />
              {errors.email ? (
                <ErrorMessage message={errors.email.message} />
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...addErrorIntoField(errors?.password)}
                    fullWidth
                    id="password"
                    label="password"
                    type="password"
                  />
                )}
              />
              {errors.password ? (
                <ErrorMessage message={errors.password.message} />
              ) : null}
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="passwordConfirm"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...addErrorIntoField(errors?.passwordConfirm)}
                    fullWidth
                    id="passwordConfirm"
                    label="passwordConfirm"
                    type="password"
                  />
                )}
              />
              {errors.passwordConfirm ? (
                <ErrorMessage message={errors.passwordConfirm.message} />
              ) : null}
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="center">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Log in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
