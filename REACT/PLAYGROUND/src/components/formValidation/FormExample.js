import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import CheckBox from "./CheckBox";
import useStyles from "./useStyles";
import schema from "./schema";

const initialValues = {
  title: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  acceptTerms: false,
};

const FormExample = () => {
  const classes = useStyles();
  const titles = ["Mr", "Mrs", "Miss", "Master"];

  const [state, setState] = useState({
    showPassword: false,
    showconfirmPassword: false,
  });

  const handleClickShowPassword = (value) => {
    if (value === "password") {
      setState((prevState) => ({
        ...state,
        showPassword: !prevState.showPassword,
      }));
    } else if (value === "confirmPassword") {
      setState((prevState) => ({
        ...state,
        showconfirmPassword: !prevState.showconfirmPassword,
      }));
    }
  };

  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Formik Validation
        </Typography>

        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSubmit(values)}
          validationSchema={schema}
        >
          {({ setFieldValue, setFieldTouched, values, errors, touched }) => (
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <Field
                    variant="outlined"
                    required
                    select
                    id="title"
                    name="title"
                    label="Title"
                    SelectProps={{ native: true }}
                    fullWidth
                    helperText={<ErrorMessage name="title"></ErrorMessage>}
                    error={touched.title && Boolean(errors.title)}
                    as={TextField}
                  >
                    <option aria-label="None" value="" />
                    {titles.map((title) => (
                      <option key={title} value={title}>
                        {title}
                      </option>
                    ))}
                  </Field>
                </Grid>
                <Grid item xs={9}>
                  <Field
                    variant="outlined"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    name="firstName"
                    helperText={<ErrorMessage name="firstName"></ErrorMessage>}
                    error={touched.firstName && Boolean(errors.firstName)}
                    as={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    variant="outlined"
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    helperText={<ErrorMessage name="lastName"></ErrorMessage>}
                    error={touched.lastName && Boolean(errors.lastName)}
                    as={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    helperText={<ErrorMessage name="email"></ErrorMessage>}
                    error={touched.email && Boolean(errors.email)}
                    as={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={state.showPassword ? "text" : "password"}
                    id="password"
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => handleClickShowPassword("password")}
                          onMouseDown={handleMouseDownPassword}
                        >
                          {state.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      ),
                    }}
                    helperText={<ErrorMessage name="password"></ErrorMessage>}
                    error={touched.password && Boolean(errors.password)}
                    as={TextField}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    variant="outlined"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type={state.showconfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    InputProps={{
                      endAdornment: (
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() =>
                            handleClickShowPassword("confirmPassword")
                          }
                          onMouseDown={handleMouseDownPassword}
                        >
                          {state.showconfirmPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      ),
                    }}
                    helperText={
                      <ErrorMessage name="confirmPassword"></ErrorMessage>
                    }
                    error={
                      touched.confirmPassword && Boolean(errors.confirmPassword)
                    }
                    as={TextField}
                  />
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Field
                  required
                  id="acceptTerms"
                  label="acceptTerms"
                  name="acceptTerms"
                  as={CheckBox}
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Register
              </Button>
              <Button
                type="reset"
                fullWidth
                variant="contained"
                color="secondary"
              >
                Reset
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default FormExample;
