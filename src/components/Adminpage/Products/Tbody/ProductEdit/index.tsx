import React from "react";
import TextField from "@material-ui/core/TextField";
import { Formik, } from 'formik'
import * as Yup from 'yup'

import {ProductEditProps} from '../../../../../types/componentTypes'
import useStyles from "./styles";

const ProductEdit = ({
  closeIt,
  data,
  handleProductUpdate,
  error
}: ProductEditProps) => {
  const classes = useStyles();

  return (
    <Formik
        initialValues={{ name:data.name, image:data.image, category:data.category, price:data.price, description:data.description }}
        
      onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          handleProductUpdate(data._id, values)
        }}
      // Yup Validation--------
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .required('Product Name is required'),
          image: Yup.string()
            .required('Image url is required'),
          category: Yup.string()
            .required('Product category is required'),
          price: Yup.string()
            .required('Product price is required'),
          description: Yup.string()
            .required('Product description is required'),
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
          <h2 className={classes.heading}>Create New Product</h2>
          </div>

          <form className={classes.form} onSubmit={handleSubmit}>
                <p className={classes.error}>{error}</p>
            <TextField
              variant="outlined"
              label="Product Name"
              name='name'
              className={classes.input}
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.name && touched.name) && errors.name}
            />
            
            <TextField
              variant="outlined"
              label="Image Url"
              name='image'
              className={classes.input}
              value={values.image}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.image && touched.image) && errors.image}
            />
            <TextField
              variant="outlined"
              label="Category"
              name='category'
              className={classes.input}
              value={values.category}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.category && touched.category) && errors.category}
            />
            <TextField
              variant="outlined"
              label="Price"
              name='price'
              className={classes.input}
              value={values.price}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.price && touched.price) && errors.price}
            />
            <TextField
              variant="outlined"
              rows={3}
              label="Description"
              name='description'
              className={classes.textArea}
              value={values.description}
              onChange={handleChange}
              onBlur={handleBlur}
              helperText={(errors.description && touched.description) && errors.description}
            />
            
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
  );
};

export default React.memo(ProductEdit);
