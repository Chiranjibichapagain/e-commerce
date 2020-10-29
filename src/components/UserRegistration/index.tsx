import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { Formik} from 'formik'
import * as Yup from 'yup'

import { useCreateUser } from "../../hook/useUserApi";
import useStyle from "./styles";

const UserRegistration = () => {
  const classes = useStyle();

  const {
    handleCreate,
    error
  } = useCreateUser();

  return (
    <Paper className={classes.root} elevation={4}>
      <Typography className={classes.heading} variant="h4">
        User Registration Form
      </Typography>
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '', password: '', rePassword: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          handleCreate(values)
        }}

        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .required('First Name is required'),
          lastName: Yup.string()
            .required('Last Name is required'),
          email: Yup.string()
            .email()
            .required('email is required'),
          password: Yup.string()
            .required('Password is required'),
          rePassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
          
        })}
      >
        {(props) => {
          const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;
          
          return (
            <form className={classes.form} onSubmit={handleSubmit}>
              <p className={classes.error}>{error}</p>
              <TextField
                variant="outlined"
                label="First Name"
                name='firstName'
                className={classes.input}
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.firstName && touched.firstName) && errors.firstName}
              />
              
              <TextField
                variant="outlined"
                label="Last Name"
                name='lastName'
                className={classes.input}
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.lastName && touched.lastName) && errors.lastName}
              />
              <TextField
                variant="outlined"
                label="Email"
                name='email'
                className={classes.input}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.email && touched.email) && errors.email}
              />
              <TextField
                variant="outlined"
                label="Password"
                name='password'
                className={classes.input}
                value={values.password}
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
                helperText={(errors.password && touched.password) && errors.password}
              />
              <TextField
                variant="outlined"
                label="Re-Password"
                name='rePassword'
                className={classes.input}
                value={values.rePassword}
                onChange={handleChange}
                type='password'
                onBlur={handleBlur}
                helperText={(errors.rePassword && touched.rePassword) && errors.rePassword}
              />
              <p className={values.password===values.rePassword?classes.match:classes.noMatch}>{values.rePassword===""? "":values.password===values.rePassword?'Password matched':'Password not matched'}</p>
              <button
                className={classes.button}
                type='submit' disabled={isSubmitting}
              >
                REGISTER
              </button>
            </form>
          );
        }}        
      </Formik>

    </Paper>
  );
};

export default React.memo(UserRegistration);
