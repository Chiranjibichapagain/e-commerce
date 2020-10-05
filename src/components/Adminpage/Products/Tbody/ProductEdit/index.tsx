import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import useStyles from "./styles";

const ProductEdit = ({ closeIt, data }: any) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.actions}>
        <span className={classes.closeBtn} onClick={() => closeIt(false)}>
          X
        </span>
        <h2 className={classes.heading}>Update Product</h2>
      </div>
      <form className={classes.form}>
        <TextField
          className={classes.input}
          label="Product Name"
          variant="outlined"
          color="primary"
          required
        />
        <TextField
          className={classes.input}
          label="Image Url"
          variant="outlined"
          color="primary"
          required
        />
        <TextField
          className={classes.input}
          label="Description"
          variant="outlined"
          color="primary"
          required
        />
        <TextField
          className={classes.input}
          label="Categories"
          variant="outlined"
          color="primary"
          required
        />
        <TextField
          className={classes.input}
          label="Price"
          variant="outlined"
          color="primary"
          required
        />
        <div className={classes.sizeDiv}>
          <h4>Sizes</h4>
          <div>
            <input
              className={classes.checkBox}
              type="checkbox"
              id="xs"
              value="xs"
            />
            <label htmlFor="xs">XS</label>
          </div>
          <div>
            <input
              className={classes.checkBox}
              type="checkbox"
              id="xs"
              value="xs"
            />
            <label htmlFor="xs">S</label>
          </div>
          <div>
            <input
              className={classes.checkBox}
              type="checkbox"
              id="xs"
              value="xs"
            />
            <label htmlFor="xs">M</label>
          </div>
          <div>
            <input
              className={classes.checkBox}
              type="checkbox"
              id="xs"
              value="xs"
            />
            <label htmlFor="xs">L</label>
          </div>
          <div>
            <input
              className={classes.checkBox}
              type="checkbox"
              id="xs"
              value="xs"
            />
            <label htmlFor="xs">XL</label>
          </div>
        </div>

        <Button className={classes.button} variant="outlined">
          UPDATE
        </Button>
      </form>
    </div>
  );
};

export default ProductEdit;
