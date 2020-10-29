import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Formik, } from 'formik'
import * as Yup from 'yup'

import {UserEditProps} from '../../../../../types/componentTypes'
import useStyles from "./styles";

const UserEdit = ({
  closeIt,
  data,
  handleUpdate,
  error
  
}: UserEditProps) => {
  const classes = useStyles();
  
    return (
      <Formik
        initialValues={{ firstName:data.firstName, lastName:data.lastName, email:data.email, admin:data.admin, banned:data.banned }}
        
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          handleUpdate(data._id, values)
        }}

        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .required('First Name is required'),
          lastName: Yup.string()
            .required('Last Name is required'),
          email: Yup.string()
            .email()
            .required('email is required'),
          admin: Yup.boolean(),
          banned: Yup.boolean()
         
        })}
      >
       
        {(props) => {
          const { values, touched, errors, isSubmitting, handleChange, handleBlur, handleSubmit } = props;
          
          return (
            <div>
            <div className={classes.actions}>
            <span className={classes.closeBtn} onClick={() => closeIt(false)}>
              X
            </span>
            <h2 className={classes.heading}>Update User </h2>
            </div>
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
              className={classes.eInput}
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.email && touched.email) && errors.email}
            />
                
            <div className={classes.switches}>
              <FormControlLabel
                control={
                <Switch
                name='admin'
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.admin}
              />  
                }
                label='Make Admin'
                labelPlacement='top'
              />
              <FormControlLabel
                control={
                <Switch
                name='banned'
                onChange={handleChange}
                onBlur={handleBlur}
                checked={values.banned}
              />  
                }
                label='Bann user'
                labelPlacement='top'
              />
            </div>
            
            <button
              className={classes.button}
              type='submit' disabled={isSubmitting}
            >
              UPDAATE
            </button>

          </form>
            </div>
          )
        }}
      </Formik>
    )
};

export default React.memo(UserEdit);
